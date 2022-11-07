'use strict';
// import * as base64 from 'ep_etherpad-lite/node_modules/base64-img/base64-img';
const { $ } = require("ep_etherpad-lite/static/js/rjquery");
// const { fs } = require('ep_etherpad-lite/static/js/image_parse');
const API = 'http://localhost:8888/editor.php';


exports.aceInitInnerdocbodyHead = (hookName, args, cb) => {
  const url = '../static/plugins/ep_embedmedia/static/css/ace.css';
  args.iframeHTML.push(`<link rel="stylesheet" type="text/css" href="${url}"/>`);
  cb();
};
exports.aceAttribsToClasses = (hookName, args) => {
  //console.log("args", args);
  if (args.key === 'embedMedia' && args.value !== '') {
    return [`embedMedia:${args.value}`];
  }
};

exports.aceCreateDomLine = (hookName, args, cb) => {
  let value = null;
  if (args.cls.indexOf('embedMedia:') >= 0) {
    const clss = [];
    const argClss = args.cls.split(' ');
    let imgBase64;
    let state;
    for (let i = 0; i < argClss.length; i++) {
      const cls = argClss[i];
      if (cls.indexOf('embedMedia:') !== -1) {
        imgBase64 = localStorage.getItem('embedMedia');
        state = localStorage.getItem('graph-id');
        localStorage.removeItem('graph-id');
        localStorage.removeItem('embedMedia');
        // console.log(fs);
        //base64.imgSync('data:image/png;base64,'+imgBase64, 'img', 'hello');
      } 
      else {
        clss.push(cls);
      }
    }
   
    state && $.ajax({
      url: API,
      type: "POST",
      data: {img: '', base64: state, PNGbase64: imgBase64},
      async: true,
      timeout: 5000,
      success: (res)=>{
        value = res;
        console.log(res);
      }
    })
    return cb([{
      cls: clss.join(' '),
      extraOpenTags: `<div id='media'><span class='embedMedia'><span id="${state}" class='media'><img class="graph" height="100%" width="100%" src="data:image/png;base64,${value}"></span><div class='character'>`,
      extraCloseTags: '</span></div><br/><br/><br/>',
    }]);
  }

  return cb();
};


const parseUrlParams = (url) => {
  const res = {};
  url.split('?')[1].split('&').map((item) => {
    item = item.split('=');
    res[item[0]] = item[1];
  });
  return res;
};

exports.sanitize = (inputHtml) => {
  // Monkeypatch the sanitizer a bit
  // adding support for embed tags and fixing broken param tags
  /* global html4, html */
  html4.ELEMENTS.embed = html4.eflags.UNSAFE;
  html4.ELEMENTS.param = html4.eflags.UNSAFE;
  // NOT empty or we break stuff in some browsers...

  return html.sanitizeWithPolicy(inputHtml, (tagName, attribs) => {
    if ($.inArray(tagName, ['embed', 'object', 'iframe', 'param']) === -1) {
      return null;
    }
    return attribs;
  });
};

exports.cleanEmbedCode = (orig) => {
  let res = null;

  const value = $.trim(orig);

  if (value.indexOf('http://') === 0 || value.indexOf('https://') === 0) {
    if (value.indexOf('www.youtube.com') !== -1) {
      const video = escape(parseUrlParams(value).v);
      // eslint-disable-next-line max-len
      res = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${video}" frameborder="0" allowfullscreen></iframe>`;
    } else if (value.indexOf('vimeo.com') !== -1) {
      const video = escape(value.split('/').pop());
      // eslint-disable-next-line max-len
      res = `<iframe src="http://player.vimeo.com/video/${video}?color=ffffff" width="420" height="236" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
    } else {
      console.warn(`Unsupported embed url: ${orig}`);
    }
  } else if (value.indexOf('<') === 0) {
    const sanitizedValue = $.trim(exports.sanitize(value));
    if (sanitizedValue !== '') {
      console.log([orig, sanitizedValue]);
      res = sanitizedValue;
    } else {
      console.warn(`Invalid embed code: ${orig}`);
    }
  } else {
    console.warn(`Invalid embed code: ${orig}`);
  }

  if (!res) {
    return "<img src='../static/plugins/ep_embedmedia/static/html/invalid.png'>";
  }

  return res;
};
