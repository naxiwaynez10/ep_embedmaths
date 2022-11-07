'use strict';
const data = {
    "1": {
        "category": "Core",
        "sub-category": "trigonometric",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/cos.html",
                "content": {
                    "name": "cos",
                    "subname": "cosine",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function.  Expects radians.\n                    ",
                    "usage": "nerdamer(\"cos(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('cos(pi)');\nconsole.log(r.toString());\nvar t = nerdamer('cos(x)')\nconsole.log(t.toString());\nvar u = nerdamer('cos(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('cos(pi\/2)')\nconsole.log(v.toString());\nv = nerdamer.cos('pi');\nconsole.log(v)<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sin.html",
                "content": {
                    "name": "sin",
                    "subname": "sine",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function. Expects radians.\n                    ",
                    "usage": "nerdamer(\"sin(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('sin(pi)').evaluate().toString();\nconsole.log(r);\nvar t = nerdamer('sin(x)').evaluate().toString()\nconsole.log(t);\nvar u = nerdamer('sin(pi\/4)').evaluate().toString()\nconsole.log(u);\nvar v = nerdamer('sin(pi)').toString()\nconsole.log(v);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/tan.html",
                "content": {
                    "name": "tan",
                    "subname": "tangent",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function.  Expects radians.\n                    ",
                    "usage": "nerdamer(\"tan(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('tan(pi)');\nconsole.log(r.toString());\nvar t = nerdamer('tan(x)')\nconsole.log(t.toString());\nvar u = nerdamer('tan(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('tan(pi\/2)')\nconsole.log(v.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sec.html",
                "content": {
                    "name": "sec",
                    "subname": "secant",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function.  Expects radians.\n                    ",
                    "usage": "nerdamer(\"sec(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('sec(pi)');\nconsole.log(r.toString());\nvar t = nerdamer('sec(x)')\nconsole.log(t.toString());\nvar u = nerdamer('sec(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('sec(pi\/2)')\nconsole.log(v.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/csc.html",
                "content": {
                    "name": "csc",
                    "subname": "cosecant",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function.  Expects radians.\n                    ",
                    "usage": "nerdamer(\"csc(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('csc(pi\/2)');\nconsole.log(r.toString());\nvar t = nerdamer('csc(x)')\nconsole.log(t.toString());\nvar u = nerdamer('csc(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('csc(pi)')\nconsole.log(v);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/cot.html",
                "content": {
                    "name": "cot",
                    "subname": "cotangent",
                    "description": "\n                        This function will return some known values for multiples of pi, pi\/2, pi\/3, etc. \n                      For numeric values it returns the javascript value for pi. In all other cases it returns \n                      a symbolic function.  Expects radians.\n                    ",
                    "usage": "nerdamer(\"cot(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('cot(pi\/2)');\nconsole.log(r.toString());\nvar t = nerdamer('cot(x)')\nconsole.log(t.toString());\nvar u = nerdamer('cot(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('cot(pi)')\nconsole.log(v.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acos.html",
                "content": {
                    "name": "acos",
                    "subname": "arccosine",
                    "description": "\n                        Returns the inverse of cos in radians. Does not detect for known values of pi at them moment. \n                    ",
                    "usage": "nerdamer(\"acos(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acos(0)');\nconsole.log(r.toString());\nvar t = nerdamer('acos(-1)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/asin.html",
                "content": {
                    "name": "asin",
                    "subname": "arcsine",
                    "description": "\n                        Returns the inverse of sin in radians. Does not detect for known values of pi at them moment. \n                    ",
                    "usage": "nerdamer(\"asin(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('asin(0)');\nconsole.log(r.toString());\nvar t = nerdamer('asin(sqrt(2)\/2)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/atan.html",
                "content": {
                    "name": "atan",
                    "subname": "arctangent",
                    "description": "\n                        Returns the inverse of tan.\n                    ",
                    "usage": "nerdamer(\"atan(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('atan(0)');\nconsole.log(r.text());\nvar t = nerdamer('atan(-1)').evaluate()\nconsole.log(t.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/atan2.html",
                "content": {
                    "name": "atan2",
                    "subname": "arctangent 2",
                    "description": "\n                        Returns the four-quadrant inverse of tangent.\n                    ",
                    "usage": "nerdamer(\"atan2(x, y)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('atan2(0, 1)').evaluate();\nconsole.log(r.text());\nvar t = nerdamer('atan2(-1, 2)').evaluate()\nconsole.log(t.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acsc.html",
                "content": {
                    "name": "acsc",
                    "subname": "arccosecant",
                    "description": "\n                        Returns the inverse of csc in radians. \n                    ",
                    "usage": "nerdamer(\"acsc(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acsc(81)');\nconsole.log(r.toString());\nvar t = nerdamer('acsc(1)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acot.html",
                "content": {
                    "name": "acot",
                    "subname": "arccotangent",
                    "description": "\n                        Returns the inverse of cot in radians. \n                    ",
                    "usage": "nerdamer(\"acot(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acot(0)');\nconsole.log(r.toString());\nvar t = nerdamer('acot(-1)')\nconsole.log(t.toString());\nt = nerdamer('acot(i-1)').evaluate()\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/asec.html",
                "content": {
                    "name": "asec",
                    "subname": "arcsecant",
                    "description": "\n                        Returns the inverse of sec in radians. \n                    ",
                    "usage": "nerdamer(\"asec(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('asec(11)');\nconsole.log(r.toString());\nvar t = nerdamer('asec(-21)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "2": {
        "category": "Core",
        "sub-category": "hyperbolic trig",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/cosh.html",
                "content": {
                    "name": "cosh",
                    "subname": "hyperbolic cosine",
                    "description": "\n                        For numeric values it returns the Math.cosh. In all other cases it returns \n                      a symbolic function. Will polyfill.\n                    ",
                    "usage": "nerdamer(\"cosh(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('cosh(0)').evaluate();\nconsole.log(r.toString());\nvar t = nerdamer('cosh(x)').evaluate()\nconsole.log(t.toString());\nvar u = nerdamer('cos(E)').evaluate()\nconsole.log(u.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sinh.html",
                "content": {
                    "name": "sinh",
                    "subname": "hyperbolic sine",
                    "description": "\n                        For numeric values it returns the Math.sinh value. In all other cases it returns \n                      a symbolic function. Will polyfill.\n                    ",
                    "usage": "nerdamer(\"sinh(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('sinh(0)');\nconsole.log(r.toString());\nvar t = nerdamer('sinh(x+x)')\nconsole.log(t.toString());\nvar u = nerdamer('sin(0.8813735870195429)').evaluate().text()\nconsole.log(u.toString());\nvar v = nerdamer('sinh(E)').evaluate().evaluate().text()\nconsole.log(v.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/tanh.html",
                "content": {
                    "name": "tanh",
                    "subname": "hyperbolic tangent",
                    "description": "\n                        For numeric values it returns Math.tanh value. In all other cases it returns \n                      a symbolic function. Will polyfill.\n                    ",
                    "usage": "nerdamer(\"tan(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('tanh(0)').evaluate();\nconsole.log(r.toString());\nvar t = nerdamer('tanh(x)')\nconsole.log(t.toString());\nvar u = nerdamer('tan(1)').evaluate()\nconsole.log(u.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sech.html",
                "content": {
                    "name": "sech",
                    "subname": "hyperbolic secant",
                    "description": "\n                        This function will return the hyperbolic secant\n                    ",
                    "usage": "nerdamer(\"sech(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('sech(pi)').evaluate();\nconsole.log(r.toString());\nvar t = nerdamer('sech(x)')\nconsole.log(t.toString());\nvar u = nerdamer('sech(pi\/4)').evaluate()\nconsole.log(u.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/csch.html",
                "content": {
                    "name": "csch",
                    "subname": "hyperbolic cosecant",
                    "description": "\n                        Returns the hyperbolic cosecant of a number\n                    ",
                    "usage": "nerdamer(\"csch(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('csch(pi\/2)');\nconsole.log(r.toString());\nvar t = nerdamer('csch(x)')\nconsole.log(t.toString());\nvar u = nerdamer('csch(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('csch(pi)')\nconsole.log(v);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/coth.html",
                "content": {
                    "name": "coth",
                    "subname": "hyperbolic cotangent",
                    "description": "\n                        Returns the hyperbolic cotangent of a number\n                    ",
                    "usage": "nerdamer(\"coth(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('coth(pi\/2)');\nconsole.log(r.toString());\nvar t = nerdamer('coth(x)')\nconsole.log(t.toString());\nvar u = nerdamer('coth(pi\/4)')\nconsole.log(u.toString());\nvar v = nerdamer('coth(pi)')\nconsole.log(v.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acosh.html",
                "content": {
                    "name": "acosh",
                    "subname": "inverse hyperbolic cosine",
                    "description": "\n                        Returns the inverse of cosh.\n                    ",
                    "usage": "nerdamer(\"acosh(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acosh(0)');\nconsole.log(r.text());\nvar t = nerdamer('acosh(-1)').evaluate()\nconsole.log(t.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/asinh.html",
                "content": {
                    "name": "asinh",
                    "subname": "inverse hyperbolic sine",
                    "description": "\n                        Returns the inverse of sinh. \n                    ",
                    "usage": "nerdamer(\"asinh(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('asinh(0)');\nconsole.log(r.toString());\nvar t = nerdamer('asinh(1)').evaluate();\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/atanh.html",
                "content": {
                    "name": "atanh",
                    "subname": "inverse hyperbolic tangent",
                    "description": "\n                        Returns the inverse of tanh.\n                    ",
                    "usage": "nerdamer(\"atan(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('atanh(0)');\nconsole.log(r.text());\nvar t = nerdamer('atanh(-1)').evaluate()\nconsole.log(t.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/asech.html",
                "content": {
                    "name": "asech",
                    "subname": "inverse hyperbolic secant",
                    "description": "\n                        Returns the inverse of sech. \n                    ",
                    "usage": "nerdamer(\"asech(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('asech(11)');\nconsole.log(r.toString());\nvar t = nerdamer('asech(-21)')\nconsole.log(t.toString());\nt = nerdamer('asech(i-21)').evaluate()\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acsch.html",
                "content": {
                    "name": "acsch",
                    "subname": "inverse hyperbolic cosecant",
                    "description": "\n                        Returns the inverse of csch. \n                    ",
                    "usage": "nerdamer(\"acsch(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acsch(81)');\nconsole.log(r.toString());\nvar t = nerdamer('acsch(1)')\nconsole.log(t.toString());\nt = nerdamer('acsch(i+1)').evaluate()\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/acoth.html",
                "content": {
                    "name": "acoth",
                    "subname": "inverse hyperbolic cotangent",
                    "description": "\n                        Returns the inverse of coth. \n                    ",
                    "usage": "nerdamer(\"acoth(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('acoth(0.1)');\nconsole.log(r.toString());\nvar t = nerdamer('acoth(-i+8)').evaluate()\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "3": {
        "category": "Core",
        "sub-category": "matrix and vector",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/matrix.html",
                "content": {
                    "name": "matrix",
                    "subname": "matrix",
                    "description": "\n                        Creates a matrix\n                    ",
                    "usage": "nerdamer(\"matrix(x, y, ...)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a row of the matrix containing the columns [e1, e2, ...]<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a row of the matrix containing the columns [e1, e2, ...]<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([a, b], [x^2, y-4])');\nvar x = nerdamer('a*x*M');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/imatrix.html",
                "content": {
                    "name": "imatrix",
                    "subname": "Identity matrix",
                    "description": "\n                        Creates an identity matrix of dimensions n x n\n                    ",
                    "usage": "nerdamer(\"imatrix(n)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">n <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Dimensions of identity matrix<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('imatrix(4)');\nconsole.log(x.toString());\nx = nerdamer.imatrix(3);\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/determinant.html",
                "content": {
                    "name": "determinant",
                    "subname": "Matrix determinant",
                    "description": "\n                        Computes the determinant of a matrix\n                    ",
                    "usage": "nerdamer(\"determinant(M)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Matrix <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The matrix for which the determinant is to be calculated.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([4,5],[1,7])');\nx = nerdamer('determinant(M)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matget.html",
                "content": {
                    "name": "matget",
                    "subname": "vector get",
                    "description": "\n                        Gets an element in a matrix with zero based index.\n                    ",
                    "usage": "nerdamer(\"matget(M, i, j)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix from which the element is being retrieved.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">row index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">j <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">column index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nconsole.log(nerdamer('matget(M, 0, 1)').toString());\nconsole.log(nerdamer('M').toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matset.html",
                "content": {
                    "name": "matset",
                    "subname": "matrix set",
                    "description": "\n                        Set an element in a matrix with zero based index. Returns the modified vector.\n                    ",
                    "usage": "nerdamer(\"matset(m, i, j)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix from which the element is being retrieved.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">row index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">j <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">column index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nnerdamer.setVar('M', 'matset(M, 0, 1, 5*x)');\nconsole.log(nerdamer('M').toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/invert.html",
                "content": {
                    "name": "invert",
                    "subname": "invert",
                    "description": "\n                        Inverts a matrix\n                    ",
                    "usage": "nerdamer(\"invert(M)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([1, 5], [4, 4])');\nvar x = nerdamer('invert(M)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/transpose.html",
                "content": {
                    "name": "transpose",
                    "subname": "transpose",
                    "description": "\n                        Transposes a matrix.\n                    ",
                    "usage": "nerdamer(\"transpose(M)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix from which the element is being retrieved.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nconsole.log(nerdamer('transpose(M)').toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matgetcol.html",
                "content": {
                    "name": "matgetcol",
                    "subname": "matrix get column",
                    "description": "\n                        Gets a column of a matrix. Returns a new vector.\n                    ",
                    "usage": "nerdamer(\"matgetcol(M, i)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix from which the column is being retrieved.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the zero based column index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nvar x = nerdamer('matgetcol(M, 0)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matgetrow.html",
                "content": {
                    "name": "matgetrow",
                    "subname": "matrix get row",
                    "description": "\n                        Gets a row of a matrix. Returns a new vector.\n                    ",
                    "usage": "nerdamer(\"matgetrow(M, i)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix from which the row is being retrieved.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the zero based row index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nvar x = nerdamer('matgetrow(M, 0)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/vector.html",
                "content": {
                    "name": "vector",
                    "subname": "vector",
                    "description": "\n                        Creates a vector\n                    ",
                    "usage": "nerdamer(\"vector(x, y, ...)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">element of the vector<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">element of the vector<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('v1', 'vector(a-2, x*y, 6)');\nx = nerdamer('a*v1');\nconsole.log(x.toString())<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/vecget.html",
                "content": {
                    "name": "vecget",
                    "subname": "vector get",
                    "description": "\n                        Gets an element in a vector with zero based index.\n                    ",
                    "usage": "nerdamer(\"vecget(v)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">v <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('v', 'vector(a-r, x*x, z)');\nvar x = nerdamer('vecget(v, 0)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/vecset.html",
                "content": {
                    "name": "vecset",
                    "subname": "vector set",
                    "description": "\n                        Set an element in a vector with zero based index. Returns the modified vector.\n                    ",
                    "usage": "nerdamer(\"vecset(v)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">v <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('v', 'vector(a-r, x*x, z)');\nnerdamer.setVar('v', 'vecset(v, 0, sqrt(2*g*h))');\nconsole.log(nerdamer('v').toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/cross.html",
                "content": {
                    "name": "cross",
                    "subname": "cross product",
                    "description": "\n                        Calculates the cross product of two vectors\n                    ",
                    "usage": "nerdamer(\"cross(v1, v2)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Vector <\/span>\n        <span class=\"parameter-name\">v1 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">Vector <\/span>\n        <span class=\"parameter-name\">v2 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('cross([1,2,3], [4,5,6])').evaluate();\nconsole.log(x.toString());\nx = nerdamer('cross([x+1,2,tan(x)], [4,x^2,1\/x])').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/dot.html",
                "content": {
                    "name": "dot",
                    "subname": "cross product",
                    "description": "\n                        Calculates the dot product of two vectors\n                    ",
                    "usage": "nerdamer(\"dot(v1, v2)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Vector <\/span>\n        <span class=\"parameter-name\">v1 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">Vector <\/span>\n        <span class=\"parameter-name\">v2 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a vector<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('dot([1,2,3], [4,5,6])').evaluate();\nconsole.log(x.toString());\nx = nerdamer('dot([x+1,2,tan(x)], [4,x^2,1\/x])').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matsetcol.html",
                "content": {
                    "name": "matsetcol",
                    "subname": "matrix set column",
                    "description": "\n                        Sets a column of a matrix. Returns a new matrix.\n                    ",
                    "usage": "nerdamer(\"matsetcol(M, i, col)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix for which the column is being set.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the zero based column index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">vector <\/span>\n        <span class=\"parameter-name\">col <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the vector representation of the column<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nvar M2 = nerdamer('matsetcol(M, 0, [[1],[2]])');\nconsole.log(M2.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/matsetrow.html",
                "content": {
                    "name": "matsetrow",
                    "subname": "matrix set row",
                    "description": "\n                        Sets a row of a matrix. Returns a new matrix.\n                    ",
                    "usage": "nerdamer(\"matsetrow(M, i, row)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">M <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix for which the row is being set.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">i <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the zero based row index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">vector <\/span>\n        <span class=\"parameter-name\">row <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">the vector representation of the row<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nvar M2 = nerdamer('matsetrow(M, 0, [1, 2])');\nconsole.log(M2.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/size.html",
                "content": {
                    "name": "size",
                    "subname": "Size",
                    "description": "\n                        Gets the size of the matrix or vector. Returns a vector with the [row length, column length] in matrix.\n                    ",
                    "usage": "nerdamer(\"size(M_V)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Matrix | Vector <\/span>\n        <span class=\"parameter-name\">M_V <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">a matrix for which the row is being set.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Matrix\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('M', 'matrix([x,y],[a,b])');\nvar matrix_size = nerdamer('size(M)');\nconsole.log(matrix_size.toString());\nvar vector_size = nerdamer('size([a, b, c])');\nconsole.log(vector_size.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "4": {
        "category": "Core",
        "sub-category": "Imaginary",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/polarform.html",
                "content": {
                    "name": "polarform",
                    "subname": "polar form",
                    "description": "\n                        converts imaginary number from rectangular form to polar form.\n                    ",
                    "usage": "nerdamer(\"polarform(z)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">z <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('polarform(b*x+x*c*i)');\nconsole.log(r.toString());\nvar t = nerdamer('polarform(5+i)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/rectform.html",
                "content": {
                    "name": "rectform",
                    "subname": "rectangular form  (Under development)",
                    "description": "\n                        converts imaginary number from polar form to rectangular form. This is still being developed so please report any issues.\n                    ",
                    "usage": "nerdamer(\"rectform(z)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">z <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('rectform(e^(atan(1\/5)*i)*sqrt(26))');\nconsole.log(r.toString());\nvar t = nerdamer('rectform(e^(atan(-1\/26)*i)*sqrt(677))')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/arg.html",
                "content": {
                    "name": "arg",
                    "subname": "argument",
                    "description": "\n                        Returns the argument of a complex number. \n                    ",
                    "usage": "nerdamer(\"arg(z)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">z <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('arg(81)');\nconsole.log(r.toString());\nvar t = nerdamer('arg(5+i)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/imagpart.html",
                "content": {
                    "name": "imagpart",
                    "subname": "imaginary part",
                    "description": "\n                        Returns the imaginary of a complex number. \n                    ",
                    "usage": "nerdamer(\"imagpart(z)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">z <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('imagpart(81+5*b*i)');\nconsole.log(r.toString());\nvar t = nerdamer('imagpart(5+i)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/realpart.html",
                "content": {
                    "name": "realpart",
                    "subname": "realpart part",
                    "description": "\n                        Returns the realpart of a complex number. \n                    ",
                    "usage": "nerdamer(\"realpart(z)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">z <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var r = nerdamer('realpart(b*x+x*c*i)');\nconsole.log(r.toString());\nvar t = nerdamer('realpart(5+i)')\nconsole.log(t.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "5": {
        "category": "Core",
        "sub-category": "math functions",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/log.html",
                "content": {
                    "name": "log",
                    "subname": "natural logarithm",
                    "description": "\n                        Calculates the log of a number base e.\n                    ",
                    "usage": "nerdamer(\"log(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('log(e^2)');\nconsole.log(x.toString());\nvar y = nerdamer('log(2*e^2)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/log10.html",
                "content": {
                    "name": "log10",
                    "subname": "logarithm",
                    "description": "\n                        Calculates the log of a number base 10. Is a direct extension of Math.log10.\n                    ",
                    "usage": "nerdamer(\"log10(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('log10(100)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('log10(100000)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/min.html",
                "content": {
                    "name": "min",
                    "subname": "minimum",
                    "description": "\n                        Returns the min of a set of numbers. Maps directly to Math.min(... args) if numeric.\n                    ",
                    "usage": "nerdamer(\"min(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('min(5, 2, 11)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('min(x*x, y, z)');\nconsole.log(x.toString());\n\/\/Instruct nerdamer to return symbolic min and max\nnerdamer.set('SYMBOLIC_MIN_MAX', true);\nx = nerdamer('min(sqrt(2), pi)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/max.html",
                "content": {
                    "name": "max",
                    "subname": "maximum",
                    "description": "\n                        Returns the maximum of a set of numbers. Maps directly to Math.max(... args) if numeric.\n                    ",
                    "usage": "nerdamer(\"max(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('max(5, 2, 11)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('max(x*x, y, z)');\nconsole.log(x.toString());\n\/\/Instruct nerdamer to return symbolic min and max\nnerdamer.set('SYMBOLIC_MIN_MAX', true);\nx = nerdamer('max(sqrt(2), pi)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/abs.html",
                "content": {
                    "name": "abs",
                    "subname": "absolute value",
                    "description": "\n                        Returns the absolute value of a number\/expression\n                    ",
                    "usage": "nerdamer(\"abs(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('abs(-x)');\nconsole.log(x.toString());\nvar y = nerdamer('abs(-2-x)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/floor.html",
                "content": {
                    "name": "floor",
                    "subname": "floor",
                    "description": "\n                        Returns the floor of a number. Maps directly to Math.floor(x) if numeric.\n                    ",
                    "usage": "nerdamer(\"floor(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('floor(5\/2)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/ceil.html",
                "content": {
                    "name": "ceil",
                    "subname": "ceiling",
                    "description": "\n                        Returns the ceiling of a number. Maps directly to Math.ceil(x) if numeric.\n                    ",
                    "usage": "nerdamer(\"ceil(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('ceil(5\/2)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/simplify.html",
                "content": {
                    "name": "simplify",
                    "subname": "Simplify",
                    "description": "\n                        Attempts to simplify an expression. Please report any bugs or errors since this is actively being worked on.\n                    ",
                    "usage": "nerdamer(\"simplify(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('simplify((x^2+4*x-45)\/(x^2+x-30))');\nconsole.log(x.toString());\nvar y = nerdamer('simplify((17\/2)*(-10+8*i)^(-1)-5*(-10+8*i)^(-1)*i)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Si.html",
                "content": {
                    "name": "Si",
                    "subname": "sine integral",
                    "description": "\n                        Calculates the sine integral of a number.\n                    ",
                    "usage": "nerdamer(\"Si(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('Si(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Si(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Ci.html",
                "content": {
                    "name": "Ci",
                    "subname": "cosine integral",
                    "description": "\n                        Calculates the cosine integral of a number.\n                    ",
                    "usage": "nerdamer(\"Ci(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('Ci(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Ci(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Ei.html",
                "content": {
                    "name": "Ei",
                    "subname": "Exponential Integral",
                    "description": "\n                        Calculates the exponential integral of a number.\n                    ",
                    "usage": "nerdamer(\"Ei(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('Ei(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Ei(3)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Ei(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/rect.html",
                "content": {
                    "name": "rect",
                    "subname": "rectangular function",
                    "description": "\n                        The rectangular function as defined  here\n                    ",
                    "usage": "nerdamer(\"rect(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('rect(5\/2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('rect(-2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('rect(0)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/step.html",
                "content": {
                    "name": "step",
                    "subname": "heaviside step function",
                    "description": "\n                        The Heaviside step function as defined here\n                    ",
                    "usage": "nerdamer(\"step(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('step(5\/2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('step(-2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('step(0)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sinc.html",
                "content": {
                    "name": "sinc",
                    "subname": "sinc function",
                    "description": "\n                        The cardinal sine function as defined  here\n                    ",
                    "usage": "nerdamer(\"sinc(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sinc(5\/2)').evaluate();\nconsole.log(x.text());\nvar x = nerdamer('sinc(-2)').evaluate();\nconsole.log(x.text());\nvar x = nerdamer('sinc(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Shi.html",
                "content": {
                    "name": "Shi",
                    "subname": "hyperbolic sine integral",
                    "description": "\n                        Calculates the hyperbolic sine integral of a number.\n                    ",
                    "usage": "nerdamer(\"Shi(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('Shi(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Shi(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Chi.html",
                "content": {
                    "name": "Chi",
                    "subname": "hyperbolic cosine integral",
                    "description": "\n                        Calculates the hyperbolic cosine integral of a number.\n                    ",
                    "usage": "nerdamer(\"Chi(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('Chi(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('Chi(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/fact.html",
                "content": {
                    "name": "fact",
                    "subname": "factorial",
                    "description": "\n                        Calculates the factorial of a number.\n                    ",
                    "usage": "nerdamer(\"factorial(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('fact(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('fact(9.1)').evaluate();\nconsole.log(x.text());\nx = nerdamer('(4\/5)!*3!-1').evaluate();;\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/factorial.html",
                "content": {
                    "name": "factorial",
                    "subname": "factorial",
                    "description": "\n                        Calculates the factorial of a number.\n                    ",
                    "usage": "nerdamer(\"factorial(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('factorial(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('factorial(9.1)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/dfactorial.html",
                "content": {
                    "name": "dfactorial",
                    "subname": "double factorial",
                    "description": "\n                        Calculates the double factorial of a number.\n                    ",
                    "usage": "nerdamer(\"dfactorial(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('dfactorial(5)').evaluate();\nconsole.log(x.text());\nx = nerdamer('dfactorial(9)').evaluate();\nconsole.log(x.text());\nx = nerdamer('dfactorial(x+1)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/exp.html",
                "content": {
                    "name": "exp",
                    "subname": "exp",
                    "description": "\n                        Maps directly to Math.exp(x) if numeric.\n                    ",
                    "usage": "nerdamer(\"exp(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('exp(1)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/mod.html",
                "content": {
                    "name": "mod",
                    "subname": "mod",
                    "description": "\n                        Calculates the modulo of two numbers.\n                    ",
                    "usage": "nerdamer(\"mod(x, y)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('mod(5, 2)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('mod(10\/12, 1\/2)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/erf.html",
                "content": {
                    "name": "erf",
                    "subname": "error function",
                    "description": "\n                        Returns the computed value for the error function.\n                    ",
                    "usage": "nerdamer(\"erf(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('erf(x)');\nconsole.log(x.toString());\nvar y = nerdamer('erf(1)').evaluate();\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sign.html",
                "content": {
                    "name": "sign",
                    "subname": "sign function",
                    "description": "\n                        Returns the sign of the number.\n                    ",
                    "usage": "nerdamer(\"sign(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sign(x)');\nconsole.log(x.toString());\nvar y = nerdamer('sign(-1)').evaluate();\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/round.html",
                "content": {
                    "name": "round",
                    "subname": "round",
                    "description": "\n                        Rounds a number to the nearest integer.\n                    ",
                    "usage": "nerdamer(\"round(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('round(5.7)').evaluate();\nconsole.log(x.text());\nx = nerdamer('round(1.4)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/pfactor.html",
                "content": {
                    "name": "pfactor",
                    "subname": "pfactor",
                    "description": "\n                        Returns the prime factors of a number. CAUTION: Calling evaluate will cause the factors to be re-evaluated causing the number to be returned.\n                    ",
                    "usage": "nerdamer(\"pfactor(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('pfactor(5.2)');\nconsole.log(x.text());\nx = nerdamer('pfactor(113)');\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sqrt.html",
                "content": {
                    "name": "sqrt",
                    "subname": "square root",
                    "description": "\n                        Calculates the square root of a number\n                    ",
                    "usage": "nerdamer(\"sqrt(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(-1)');\nconsole.log(x.toString());\nx = nerdamer('sqrt(2)');\nconsole.log(x.toString());\nx = nerdamer('sqrt(3\/2)');\nconsole.log(x.toString());\nx = nerdamer('sqrt(x^2\/5)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/expand.html",
                "content": {
                    "name": "expand",
                    "subname": "expand",
                    "description": "\n                        Expands a function or expression.\n                    ",
                    "usage": "nerdamer(\"expand(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('expand((x^2+1)^2\/4)');\nconsole.log(x.toString());\nvar y = nerdamer('expand(x*(x+1))');\nconsole.log(y.toString());\nx = nerdamer('(x+y)*(x-5)*x').expand();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/fib.html",
                "content": {
                    "name": "fib",
                    "subname": "fibonacci",
                    "description": "\n                        Calculates the fibonacci value given a number.\n                    ",
                    "usage": "nerdamer(\"fib(number)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">number <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('fib(15)').evaluate();\nconsole.log(x.text());\nx = nerdamer('fib(0)').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/tri.html",
                "content": {
                    "name": "tri",
                    "subname": "triangular function",
                    "description": "\n                        The triangular function as defined  here\n                    ",
                    "usage": "nerdamer(\"tri(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('tri(5\/2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('tri(-2)').evaluate();\nconsole.log(x.toString());\nvar x = nerdamer('tri(0)').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/parens.html",
                "content": {
                    "name": "parens",
                    "subname": "parentheses",
                    "description": "\n                        Wraps an expression in parentheses. Useful for expressing factors. Calling evaluate removes parentheses.\n                    ",
                    "usage": "nerdamer(\"parens(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('parens(9)*parens(7)');\nconsole.log(x.toString());\nconsole.log(x.evaluate().toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/line.html",
                "content": {
                    "name": "line",
                    "subname": "sort",
                    "description": "\n                        Computes the equation of a straight line given two points\n                    ",
                    "usage": "nerdamer(\"line(p1, p2)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">vector <\/span>\n        <span class=\"parameter-name\">p1 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A vector in form of [x, y]<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">vector <\/span>\n        <span class=\"parameter-name\">p2 <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A vector in form of [x, y]<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('line([-1,-4], [3,11])');\nconsole.log(x.toString());\nvar y = nerdamer('line([1,2], [3,4])');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/continued_fraction.html",
                "content": {
                    "name": "continued_fraction",
                    "subname": "Continued Fraction",
                    "description": "\n                        Returns the fraction as a continued fraction. The first digit returned is the sign. The remainder is the continued fraction.\n                    ",
                    "usage": "nerdamer(\"continued_fraction(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('continued_fraction(3.14159)');\nconsole.log(x.toString());\nx = nerdamer('continued_fraction(1\/6)')\nconsole.log(x.toString());\nx = nerdamer('continued_fraction(-5\/4)')\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "6": {
        "category": "Calculus",
        "sub-category": "functions",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/sum.html",
                "content": {
                    "name": "sum",
                    "subname": "summation",
                    "description": "\n                        Sums an expression from lower to upper limit. Works both numerically and algebraically.\n                    ",
                    "usage": "nerdamer(\"sum(expression, index, lower, upper)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">index <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The index of summation<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">lower <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Starting index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">upper <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Ending index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sum(x+1, x, 1, 5)');\nconsole.log(x.toString())\nvar y = nerdamer('sum(x+y, x, 1, 20)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/product.html",
                "content": {
                    "name": "product",
                    "subname": "product",
                    "description": "\n                        Calculates the product of an expression from lower to upper limit. Works both numerically and algebraically.\n                    ",
                    "usage": "nerdamer(\"product(expression, index, lower, upper)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">index <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">lower <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Starting index<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">upper <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Ending index<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('product(x+1, x, 1, 20)');\nconsole.log(x.toString())\nvar y = nerdamer('product(x+y, x, 1, 5)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/diff.html",
                "content": {
                    "name": "diff",
                    "subname": "differentiate",
                    "description": "\n                        Gets the derivative.\n                    ",
                    "usage": "nerdamer(\"diff(expression_or_vector, x, n)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression_or_vector <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable with respect to differentiate<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">n <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">(Optional) The nth derivative.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('diff(cos(x)*sin(x), x)');\nconsole.log(x.toString());\nvar y = nerdamer('diff([x^2, cos(x), 1], x, 2)'); \/\/second derivative\nconsole.log(y.toString());\nvar y = nerdamer('diff(x^3+a*x^3+x^2, x, 2)'); \/\/second derivative\nconsole.log(y.toString());\nx = nerdamer.diff(nerdamer('x^2').add(1).multiply('tan(x)'), 'x')\nconsole.log(x.toString())<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/integrate.html",
                "content": {
                    "name": "integrate",
                    "subname": "integrate",
                    "description": "\n                        Attempts to compute integral of the expression. The depth of integration can be set using the \"integration_depth\" flag but be careful as this\n                     can seriously degrade performance. See example below. The hasIntegral method can be used to check if the symbol was completely integrated.\n                     This method will return true if the method was not completely integrated. The default depth is 4.\n                    ",
                    "usage": "nerdamer(\"integrate(expression_or_vector, dx)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression_or_vector <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">dx <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable with respect to which integrate. Optional for univariate expressions.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('integrate(10*q\/(4*x^2+24*x+20), x)');\nconsole.log(x.toString());\nvar y = nerdamer('integrate(sec(x)^2, x)'); \nconsole.log(y.toString());\nvar y = nerdamer('integrate([sec(x)^2, x^2, 2], x)');\nconsole.log(y.toString());\nvar x  = nerdamer('integrate(cos(x)*x^6, x)');\nconsole.log(x.toString());\n\/\/we can use the hasIntegral method to check if it was fully integrated\nconsole.log(x.hasIntegral());\nx = nerdamer.integrate('sinh(x)*e^x');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/defint.html",
                "content": {
                    "name": "defint",
                    "subname": "definite integral",
                    "description": "\n                        Attempts to compute the definite integral of the expression. Assumes that function is continuous over interval when integrating numerically.\n                    ",
                    "usage": "nerdamer(\"defint(expression_or_vector, from, to, dx)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression_or_vector <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">dx <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable with respect to which integrate. Optional with univariate expression.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">from <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The lower limit of integration<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">to <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The upper limit of integration<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('defint(e^(cos(x)), 1, 2)');\nconsole.log(x.text());\nvar y = nerdamer('defint(x^2+2*x+1,0, 10)');\nconsole.log(y.text());\nvar y = nerdamer('defint(log(2cos(x\/2)),-\u03c0,\u03c0,x)');\nconsole.log(y.text());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "7": {
        "category": "Algebra",
        "sub-category": "functions",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/divide.html",
                "content": {
                    "name": "divide",
                    "subname": "divide",
                    "description": "\n                        Divides 2 polynomials.\n                    ",
                    "usage": "nerdamer(\"divide(x, y)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('divide(x^2+2*x+1, x+1)');\nconsole.log(x.toString())\nvar y = nerdamer('divide(-b*z-a*z+b^3+a*b^2+a*b+a^2, b+a)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/factor.html",
                "content": {
                    "name": "factor",
                    "subname": "factor",
                    "description": "\n                        Factor an expression. Multivariate factoring in currently under development.\n                    ",
                    "usage": "nerdamer(\"factor(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('factor(x^2-3*x-10)');\nconsole.log(x.toString())\nvar y = nerdamer('factor(-b*z-a*z+b^3+a*b^2+a*b+a^2)');\nconsole.log(y.toString());\nvar z = nerdamer('factor(sin(x)^6+3*cos(x)^2*sin(x)^4+3*cos(x)^4*sin(x)^2+cos(x)^6)');\nconsole.log(z.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/partfrac.html",
                "content": {
                    "name": "partfrac",
                    "subname": "partial fractions",
                    "description": "\n                        Performs partial fraction decomposition\n                    ",
                    "usage": "nerdamer(\"partfrac(expression, x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression for which the partrial fractions are to be found.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable for which the partial fractions are to be found.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('partfrac((x^2+a)\/(x*(x-1)^3), x)');\nconsole.log(x.toString())\nvar y = nerdamer('partfrac(1\/(x^6+x^5),x)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/lcm.html",
                "content": {
                    "name": "lcm",
                    "subname": "Least Common Multiple",
                    "description": "\n                        Gets the LCM of 2 polynomials\n                    ",
                    "usage": "nerdamer(\"lcm(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('lcm(x^2+2*x+1, x^2+6*x+5)');\nconsole.log(x.toString())\nvar y = nerdamer('lcm(3, 21)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/gcd.html",
                "content": {
                    "name": "gcd",
                    "subname": "Greatest Common Divisor",
                    "description": "\n                        Gets the GCD of 2 polynomials\n                    ",
                    "usage": "nerdamer(\"gcd(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Returns the appropriate value if possible otherwise it returns the function with the simplified expression<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('gcd(x^2+2*x+1, x^2+6*x+5)');\nconsole.log(x.toString())\nvar y = nerdamer('gcd(b*z+a*z+b^2+a*b, a+b)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/roots.html",
                "content": {
                    "name": "roots",
                    "subname": "polynomial roots",
                    "description": "\n                        Finds the roots of a univariate polynomial.\n                    ",
                    "usage": "nerdamer(\"roots(x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression for which the roots are to be found.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('roots(x^2-3*x-10)');\nconsole.log(x.toString())\nvar y = nerdamer('roots(x^2+1)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/coeffs.html",
                "content": {
                    "name": "coeffs",
                    "subname": "coefficients",
                    "description": "\n                        Get the coefficients of a polynomial. The coefficients will be placed in the index of their power. So constants are in the 0th place, x^2 would be in the 2nd place, etc. Throws an error if expression is not a polynomial. Holes will be filled with zeroes. Coeffs returns a vector so the methods vecget and vecset can be used to access it's elements.\n                    ",
                    "usage": "nerdamer(\"coeffs(polynomial, x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">polynomial <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The polynomial for which the coefficients are to be found.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The respective variable with which to get the coefficients<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var coeffs = nerdamer.coeffs('3*x^2+1', 'x');\nconsole.log(coeffs.toString());\ncoeffs.each(function(e, i) {\n   console.log('coeff #'+i+': ', nerdamer(e).add('t').toString());\n});\nvar poly = nerdamer('a*x^2+b*x+c+x');\ncoeffs = nerdamer.coeffs(poly, 'x');\nconsole.log(coeffs.toString());\ncoeffs = nerdamer.coeffs('a*x+b\/x^2', 'x');\nvar p = nerdamer('vecget(coeffs(7*x^2+3*x+11, x), 2)');\nconsole.log(p.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/deg.html",
                "content": {
                    "name": "deg",
                    "subname": "sort",
                    "description": "\n                        Returns the degree of the polynomial. Specify the variable to use in multivariate polynomials.\n                    ",
                    "usage": "nerdamer(\"deg(p)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Expression\/polynomial <\/span>\n        <span class=\"parameter-name\">p <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A polynomial<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\/Integer\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('deg(x^2+2*x+1)');\nconsole.log(x.toString());\nvar y = nerdamer('deg(a*x^7+2*x+1,x)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/sqcomp.html",
                "content": {
                    "name": "sqcomp",
                    "subname": "complete the square",
                    "description": "\n                        Attempts to rewrite to polynomial to complete the square.\n                    ",
                    "usage": "nerdamer(\"sqcomp(polynomial, x)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">polynomial <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The polynomial for which is to be rewritten.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable to use. Will automatically assume the variable for univariate polynomials.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Vector\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqcomp(9*x^2-18*x+17)');\nconsole.log(x.toString());\nvar y = nerdamer('sqcomp(a*x^2+b*x-11*c, x)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "8": {
        "category": "Solve",
        "sub-category": "functions",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/solve.html",
                "content": {
                    "name": "solve",
                    "subname": "solve",
                    "description": "\n                        Similiar to solveFor this will solve for a given variable. The difference is that this is a self contained function.\n                    ",
                    "usage": "nerdamer(\"nerdamer(\"solve(expression, variable\")\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression to solve<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">variable <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable to solve for.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Symbol[]\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">\/\/ If a formula is provided, then it will be assumed to equal zero.\nvar x = nerdamer('solve(x^3+1, x)');\nconsole.log(x.toString());\nx = nerdamer.solve('x^2+2*x+1', 'x');\nconsole.log(x.toString());\nx = nerdamer.solve('3*(x+a)*(x-b)', 'x');\nconsole.log(x.toString());\nx = nerdamer.solve('3*(x+a)*(x-b)', 'x');\nconsole.log(x.toString());\n\/\/ Full equations are also supported.\nx = nerdamer('solve(x^4=1,x)');\nconsole.log(x.toString());\nx = nerdamer('solve(y=m*x+c, x)');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/solveEquations.html",
                "content": {
                    "name": "solveEquations",
                    "subname": "solveEquations",
                    "description": "\n                        Solves a system of linear equations. Has limited ability to solve system of nonlinear equations. With nonlinear equations, the first set of solutions which satisfies the constraints will be returned. Also keep in mind that there may be some floating point errors.\n                    ",
                    "usage": "nerdamer(\"nerdamer.solveEquations(expression_or_array, variables)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">Expression <\/span>\n        <span class=\"parameter-name\">expressions_or_array <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">An array of expression<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">variables <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variables to solve for.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Symbol[]\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var sol = nerdamer.solveEquations(['x+y=1', '2*x=6', '4*z+y=6']);\nconsole.log(sol.toString());\nsol = nerdamer.solveEquations('cos(x)+cos(3*x)=1','x');\nconsole.log(sol.toString());\nsol = nerdamer.solveEquations('x^2+8+y=x+6','x');\nconsole.log(sol.toString());\nnerdamer.set('SOLUTIONS_AS_OBJECT', true);\nsol = nerdamer.solveEquations(['2*x-y=8', '10*x+7*y-z=53', '4*z+y=6']);\nconsole.log(sol)\nnerdamer.set('SOLUTIONS_AS_OBJECT', true)\n\/\/ Linear solutions can be solved symbolically. Just pass in the variables to solve for\nvar solutions = nerdamer.solveEquations(['2*x-b*y=1', 'x+y=4'], ['x', 'y']);\nconsole.log(JSON.stringify(solutions, null, 4))\n\/\/ nerdamer also has some ability to solve some nonlinear equations\nnerdamer.set('SOLUTIONS_AS_OBJECT', false);\nsol = nerdamer('solveEquations([2*x^2*z-y=-59, 0.5*y^3-z=65.5, x^2+y^3-5*z^2=89])');\nconsole.log(sol.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/solveFor.html",
                "content": {
                    "name": "solveFor",
                    "subname": "solveFor",
                    "description": "\n                        This method requires that the Solve, Calculus, and Algebra add-ons are loaded. It will attempt to solve an equation. If solutions no solutions are found then\n                      an empty array is returned. It can solve for multivariate polynomials up to the third degree. After which it can solve numerically for polynomials up to the\n                      the 100th degree. If it's a univariate equation it will attempt to solve it using numerical methods.\n                    ",
                    "usage": "nerdamer(\"nerdamer(equation).solveFor(variable)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">variable <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable to solve for.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression[]\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var eq = nerdamer('a*x^2+b*x=y').evaluate({y: 'x-7'});\nconsole.log(eq.toString());\nvar solutions = eq.solveFor('x').toString();\nconsole.log(solutions);<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "9": {
        "category": "Extra",
        "sub-category": "functions",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/laplace.html",
                "content": {
                    "name": "laplace",
                    "subname": "Laplace",
                    "description": "\n                        Attempts to calculate the Laplace transform of an expression. Currently computes transforms of most common expressions. Throws an error if no transform could be calculated.\n                    ",
                    "usage": "nerdamer(\"laplace(expression, t, s)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression to be transformed<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">variable <\/span>\n        <span class=\"parameter-name\">t <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The time variable<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">variable <\/span>\n        <span class=\"parameter-name\">s <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The transformation variable<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('laplace(t^6, t, s)').evaluate();\nconsole.log(x.toString());\nx = nerdamer.laplace('cos(w*t)', 't', 'x');\nconsole.log(x.toString())\nx = nerdamer.laplace('cos(w*t)*t', 't', 'x');\nconsole.log(x.toString())<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/ilt.html",
                "content": {
                    "name": "ilt",
                    "subname": "inverse Laplace (Under development)",
                    "description": "\n                        Attempts to calculate the inverse Laplace transform of an expression. Currently computes transforms of most common expressions. Throws and error if no transform could be calculated. This is still being developed so please report any issues.\n                    ",
                    "usage": "nerdamer(\"ilt(expression, s, t)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression to be transformed<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">variable <\/span>\n        <span class=\"parameter-name\">s <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The transformation variable<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">variable <\/span>\n        <span class=\"parameter-name\">t <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The time variable<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('ilt(factorial(6)*s^(-7),s, t)').evaluate();\nconsole.log(x.toString());\nvar y = nerdamer('ilt((1+s^2)^(-1)*s, s, t)').evaluate();\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/mean.html",
                "content": {
                    "name": "mean",
                    "subname": "mean",
                    "description": "\n                        Calculates the mean of a set of numbers\n                    ",
                    "usage": "nerdamer(\"mean(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('mean(4,2,5)');\nconsole.log(x.toString());\nx = nerdamer('mean([4,2,5])');\nconsole.log(x.toString());\nx = nerdamer.mean('x', 'r+1', '21', 'tan(x)');\nconsole.log(x.toString());\nx = nerdamer.mean('11', '12', '13', '14');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/mode.html",
                "content": {
                    "name": "mode",
                    "subname": "mode",
                    "description": "\n                        Calculates the mode of a set of numbers. Returns a symbolic function if mode cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"mode(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('mode(4,2,5,4)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('mode([4,2,5,4])').evaluate();\nconsole.log(x.toString());\nx = nerdamer.mode('11', '12', '13', '14').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/median.html",
                "content": {
                    "name": "median",
                    "subname": "median",
                    "description": "\n                        Calculates the median of a set of numbers. Return symbolic function of median cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"median(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('median(4,2,5,4)').evaluate();\nconsole.log(x.toString());\nx = nerdamer('median([4,2,5,4])').evaluate();\nconsole.log(x.toString());\nx = nerdamer.median('x', 'r+1', '21', 'tan(x)', 'r+1');\nconsole.log(x.toString());\nx = nerdamer.median('11', '12', '13', '14').evaluate();\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/zscore.html",
                "content": {
                    "name": "zscore",
                    "subname": "Z-score",
                    "description": "\n                        Calculates the z-score for a value.\n                    ",
                    "usage": "nerdamer(\"zscore(x, mean, stdev)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The value for which to find the z-score.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">mean <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The mean of the set of numbers.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">stdev <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The standard deviation of the set of numbers.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">nerdamer.setVar('x', '[3,1,2,6]');\nvar x = nerdamer('zscore(2, mean(x), stdev(x))');\nconsole.log(x.toString());\nx = x.evaluate()\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/limit.html",
                "content": {
                    "name": "limit",
                    "subname": "Limit",
                    "description": "\n                        Attempts to calculate the limit of a function.\n                    ",
                    "usage": "nerdamer(\"limit(expression, variable, limit)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression <\/span>\n        <span class=\"parameter-name\">expression <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The expression to be transformed<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">variable <\/span>\n        <span class=\"parameter-name\">variable <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The variable<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">limit <\/span>\n        <span class=\"parameter-name\">limit <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The limit<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('limit(x^x-1,x,0)');\nconsole.log(x.toString());\nvar y = nerdamer('limit((x^2+2*x-3)\/(x^6+4),x,0)');\nconsole.log(y.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/smpvar.html",
                "content": {
                    "name": "smpvar",
                    "subname": "Sample variance",
                    "description": "\n                        Calculates the sample variance of a set of numbers. Return symbolic function of median cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"smpvar(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('smpvar(4,2,5,4)').evaluate();\nconsole.log(x.text());\nx = nerdamer('smpvar([4,2,5])');\nconsole.log(x.toString());\nx = nerdamer.smpvar('x', 'r+1', '21', 'tan(x)', 'r+1');\nconsole.log(x.toString());\nx = nerdamer.smpvar('11', '12', '13', '14').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/variance.html",
                "content": {
                    "name": "variance",
                    "subname": "Variance",
                    "description": "\n                        Calculates the population variance of a set of numbers. Return symbolic function of median cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"variance(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('variance(4,2,5,4)').evaluate();\nconsole.log(x.text());\nx = nerdamer('variance([4,2,5])');\nconsole.log(x.toString());\nx = nerdamer.variance('x', 'r+1', '21', 'tan(x)', 'r+1');\nconsole.log(x.toString());\nx = nerdamer.variance('11', '12', '13', '14').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/smpstdev.html",
                "content": {
                    "name": "smpstdev",
                    "subname": "Sample standard deviation",
                    "description": "\n                        Calculates the sample standard deviation of a set of numbers. Return symbolic function of median cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"smpstdev(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('smpstdev(4,2,5,4)').evaluate();\nconsole.log(x.text());\nx = nerdamer('smpstdev([4,2,5])');\nconsole.log(x.toString());\nx = nerdamer.smpstdev('x', 'r+1', '21', 'tan(x)', 'r+1');\nconsole.log(x.toString());\nx = nerdamer.smpstdev('11', '12', '13', '14').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/stdev.html",
                "content": {
                    "name": "stdev",
                    "subname": "Standard deviation",
                    "description": "\n                        Calculates the population standard deviation of a set of numbers. Return symbolic function of median cannot be calculated.\n                    ",
                    "usage": "nerdamer(\"stdev(... args)\")",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">expression | expression[] <\/span>\n        <span class=\"parameter-name\">args <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">A variable number of arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('stdev(4,2,5,4)').evaluate();\nconsole.log(x.text());\nx = nerdamer('stdev([4,2,5])');\nconsole.log(x.toString());\nx = nerdamer.stdev('x', 'r+1', '21', 'tan(x)', 'r+1');\nconsole.log(x.toString());\nx = nerdamer.stdev('11', '12', '13', '14').evaluate();\nconsole.log(x.text());<\/code><\/pre>\n                "
                }
            }
        ]
    },
    "10": {
        "category": "Expression",
        "sub-category": "API",
        "data": [
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.buildFunction.html",
                "content": {
                    "name": "Expression.buildFunction",
                    "subname": "buildFunction",
                    "description": "\n                        Generates a JavaScript function given the expression. This is perfect for plotting and filtering user input. Plotting for the demo is accomplished \n                     using this. The order of the function parameters is in alphabetical order by default but an array containing the list of arguments \n                     in the preferred order can be passed to the function.\n                    ",
                    "usage": "nerdamer(expression).buildFunction(args_array)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String[] <\/span>\n        <span class=\"parameter-name\">args_array <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The argument array with the order in which they are preferred.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Function\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var e = nerdamer('x^2+y');\nvar f = e.buildFunction();\nconsole.log(f(2, 3));\n\/\/change the variable order by passing in an array with the order\nvar g = e.buildFunction(['y', 'x']);\nconsole.log(g(2, 3));<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.evaluate.html",
                "content": {
                    "name": "Expression.evaluate",
                    "subname": "evaluate",
                    "description": "\n                        Forces evaluation of the expression.\n                    ",
                    "usage": "nerdamer(expression).evaluate()",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\"> <\/span>\n        <span class=\"parameter-name\">none <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">This function takes no arguments<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sin(9+5)');\n\/\/the expression is simplified but the functions aren't called.\nconsole.log(x.toString());\n\/\/force function calls with evaluate\nconsole.log(x.evaluate().toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.sub.html",
                "content": {
                    "name": "Expression.sub",
                    "subname": "substitute",
                    "description": "\n                        Substitutes a given value with another given value.\n                    ",
                    "usage": "nerdamer(expression).sub(value, for_value)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">value <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The value being substituted.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">for_value <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The value to substitute for.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('3*(x+1)^3+8*(x+1)^2+u').sub('x+1', 'u');\nconsole.log(x.toString());\nx = nerdamer('cos(x)*tan(x)').sub('tan(x)', 'sin(x)\/cos(x)').evaluate()\nconsole.log(x.toString());\n\/\/one more\nx = nerdamer('(x+1)*cos(x+1)').sub('x+1', 'u');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.add.html",
                "content": {
                    "name": "Expression.add",
                    "subname": "add",
                    "description": "\n                        Adds two expressions.\n                    ",
                    "usage": "nerdamer(x).add(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('x+1').add('x');\nconsole.log(x.toString());\nvar x = nerdamer(0.1).add(0.2);\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.subtract.html",
                "content": {
                    "name": "Expression.subtract",
                    "subname": "subtract",
                    "description": "\n                        Subtracts two expressions.\n                    ",
                    "usage": "nerdamer(x).subtract(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('x+1').subtract('x');\nconsole.log(x.toString());\nvar x = nerdamer(0.1).subtract(0.2);\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.multiply.html",
                "content": {
                    "name": "Expression.multiply",
                    "subname": "multiply",
                    "description": "\n                        Multiplies two expressions.\n                    ",
                    "usage": "nerdamer(x).multiply(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var a = nerdamer('x');\nvar x = nerdamer('x+1').multiply(a);\nconsole.log(x.toString());\nvar x = nerdamer(0.1).multiply(0.2);\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.divide.html",
                "content": {
                    "name": "Expression.divide",
                    "subname": "divide",
                    "description": "\n                        Divides one expression by another.\n                    ",
                    "usage": "nerdamer(x).divide(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('x^2+x').divide('x').expand();\nconsole.log(x.toString());\nx = nerdamer(0.1).multiply(0.2);\nconsole.log(x.toString());\nvar a = nerdamer('(x+a)(y+b)');\nvar b = nerdamer('2(y+b)');\nconsole.log(a.divide(b).toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.pow.html",
                "content": {
                    "name": "Expression.pow",
                    "subname": "power",
                    "description": "\n                        Raises one expression to another.\n                    ",
                    "usage": "nerdamer(x).pow(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('x^2+x').pow('x');\nconsole.log(x.toString());\nvar x = nerdamer(5).pow(2);\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.variables.html",
                "content": {
                    "name": "Expression.variables",
                    "subname": "variables",
                    "description": "\n                        Get a list of the variables contained within the expression.\n                    ",
                    "usage": "nerdamer(expression).variables()",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\"> <\/span>\n        <span class=\"parameter-name\">none <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">This function takes no arguments.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        String[]\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var e = nerdamer('x^2+y-a*e');\nvar variables = e.variables();\nconsole.log(variables);\ne = nerdamer('a*b*c^r+1');\nvariables = e.variables();\nconsole.log(variables);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.toTeX.html",
                "content": {
                    "name": "Expression.toTeX",
                    "subname": "toTeX",
                    "description": "\n                        Gets expression as LaTeX\n                    ",
                    "usage": "nerdamer.toTeX",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\"> <\/span>\n        <span class=\"parameter-name\">none <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">This function takes no arguments.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        String\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('(x+1)*cos(x+1)');\nconsole.log(x.toTeX());\nx = nerdamer('1\/2*x+2*b\/5*x^2');\nconsole.log(x.toTeX());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.text.html",
                "content": {
                    "name": "Expression.text",
                    "subname": "text",
                    "description": "\n                        Returns the text representation of the expression.\n                    ",
                    "usage": "nerdamer.text(option, n)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">option <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Pass in the string 'decimals' to get back the number as decimals. Pass in the string 'recurring' to get back the number as a recurring decimal. Pass in the string 'fractions' to get back the number as fractions. Defaults to decimals.<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">n <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">The number of decimal places if requested as decimal<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        String\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('1\/12+1\/2*cos(x)-0.5');\nconsole.log(x.text('decimals'));\nconsole.log(x.text('decimals', 1));\nconsole.log(x.text('decimals', 7));\nconsole.log(x.text('recurring'));\nconsole.log(x.text('fractions'));<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.denominator.html",
                "content": {
                    "name": "Expression.denominator",
                    "subname": "denominator",
                    "description": "\n                        Get a list of the denominator of a polynomial\n                    ",
                    "usage": "nerdamer(expression).denominator()",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\"> <\/span>\n        <span class=\"parameter-name\">none <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">This function takes no arguments.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var e = nerdamer('(x^2+1)\/(x-1)');\nvar denominator = e.denominator().toString();\nconsole.log(denominator);\ne = nerdamer('2\/5');\ndenominator = e.denominator().toString();\nconsole.log(denominator);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.numerator.html",
                "content": {
                    "name": "Expression.numerator",
                    "subname": "numerator",
                    "description": "\n                        Get a list of the numerator of a polynomial\n                    ",
                    "usage": "nerdamer(expression).numerator()",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\"> <\/span>\n        <span class=\"parameter-name\">none <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">This function takes no arguments.<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Expression\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var e = nerdamer('(x^2+1)\/(x-1)');\nvar numerator = e.numerator().toString();\nconsole.log(numerator);\ne = nerdamer('2\/5');\nnumerator = e.numerator().toString();\nconsole.log(numerator);<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.eq.html",
                "content": {
                    "name": "Expression.eq",
                    "subname": "equals",
                    "description": "\n                        Checks for equality of two expressions.\n                    ",
                    "usage": "nerdamer(x).eq(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Boolean\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(2)').eq('2^(1\/2)');\nconsole.log(x.toString());\nvar x = nerdamer(5).eq(2);\nconsole.log(x.toString());\nvar x = nerdamer('a+1').eq('a+1');\nconsole.log(x.toString());\nvar x = nerdamer('Infinity').eq('Infinity');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.lt.html",
                "content": {
                    "name": "Expression.lt",
                    "subname": "less than",
                    "description": "\n                        Checks if one expression is less than other.\n                    ",
                    "usage": "nerdamer(x).lt(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Boolean\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(2)').lt('2^(1\/2)');\nconsole.log(x.toString());\nvar x = nerdamer(5).lt(2);\nconsole.log(x.toString());\nvar x = nerdamer('a').lt('a+1');\nconsole.log(x.toString());\nvar x = nerdamer('Infinity').lt('Infinity');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.gt.html",
                "content": {
                    "name": "Expression.gt",
                    "subname": "greater than",
                    "description": "\n                        Checks if one expression is greater than other.\n                    ",
                    "usage": "nerdamer(x).gt(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Boolean\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(2)').gt('2^(1\/2)');\nconsole.log(x.toString());\nvar x = nerdamer(5).gt(2);\nconsole.log(x.toString());\nvar x = nerdamer('a+1').gt('a+1');\nconsole.log(x.toString());\nvar x = nerdamer('Infinity').gt('Infinity');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.lte.html",
                "content": {
                    "name": "Expression.lte",
                    "subname": "less than or equals",
                    "description": "\n                        Checks if one expression is less than, or equal to, other.\n                    ",
                    "usage": "nerdamer(x).lte(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Boolean\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(2)').lte('2^(1\/2)');\nconsole.log(x.toString());\nvar x = nerdamer(5).lte(2);\nconsole.log(x.toString());\nvar x = nerdamer('a+1').lte('a+1');\nconsole.log(x.toString());\nvar x = nerdamer('Infinity').lte('Infinity');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            },
            {
                "url": "https:\/\/nerdamer.com\/functions\/Expression.gte.html",
                "content": {
                    "name": "Expression.gte",
                    "subname": "greater than or equals",
                    "description": "\n                        Checks if one expression is greater than, or equal to, other.\n                    ",
                    "usage": "nerdamer(x).gte(y)",
                    "parameters": "\n                        <table class=\"table table-responsive table-condensed\">\n                            <tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">x <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 1<\/span><\/td>\n<\/tr><tr>\n    <td>\n        <span class=\"parameter-type\">String <\/span>\n        <span class=\"parameter-name\">y <\/span>\n    <\/td>\n    <td><span class=\"parameter-description\">Expression 2<\/span><\/td>\n<\/tr>\n                        <\/table>\n                    ",
                    "returns": "\n                        Boolean\n                    ",
                    "example": "\n                    <pre><code class=\"javascript\">var x = nerdamer('sqrt(2)').gte('2^(1\/2)');\nconsole.log(x.toString());\nvar x = nerdamer(5).gte(2);\nconsole.log(x.toString());\nvar x = nerdamer('a+1').gte('a+1');\nconsole.log(x.toString());\nvar x = nerdamer('Infinity').gte('Infinity');\nconsole.log(x.toString());<\/code><\/pre>\n                "
                }
            }
        ]
    }
}
const { $ } = require('ep_etherpad-lite/static/js/rjquery');
const API = 'http://localhost:8888/editor.php';
// const data = require('./data')
$(document).ready(() => {   
  if(window.ggbApplet && ggbApplet.newConstruction){
    ggbApplet.newConstruction();
  }
  var parameters = {
      "appname":"clasic",
      "id":"ggbApplet",
      "width":800,
      "height":600,
      "showToolBar":true,
    //   "init": (pad)=>{},
      "showMenuBar":true,
      "allowStyleBar":true,
      "showAlgebraInput":true,
      "enableLabelDrags":false,
      "enableShiftDragZoom":true,
      "capturingThreshold":null,
      // "showToolBarHelp":false,
      "errorDialogsActive":true,
      // "showTutorialLink":false,
      // "showLogging":true,
      "useBrowserForJS":true,
      "disableAutoScale":true,
      // "perspective":"1",
      "useBrowserForJS":false,
      // "ggbbase64": "UEsDBBQAAAAIAOKrWFWP9UxIFQUAACUmAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMyZC54bWztWlFz4jYQfu79Co+e2oeAbTCQTJyb3M10mplc7qbJdPoqjDBqhORacjD59V1JxjYBcomBQHrHA/La0lr7favVSvL5x3zKnAeSSip4iLyWixzCIzGiPA5RpsYnA/Tx4sN5TERMhil2xiKdYhWiQNcs24HU6vumNU6SEEUMS0kj5CQMK90kRDPkOLmkZ1zc4CmRCY7IbTQhU3wtIqyMlolSyVm7PZvNWov3tUQat0GlbOdy1I5j1YISOdBpLkNUXJyB3qXWs45p57uu1/77y7V9zwnlUmEeEeSAQSMyxhlTEi4JI1PClaPmCQlRIihXyGF4SFiIvmnJ+XWcEvIbcopGgJOLLj78ci4nYuaI4T8kgnsqzUB10c4IbV0HHn8WTKROGqJ+HzkAqy6GIfKDAOBiyQSHyLWVGZ6T1HnAoKG4gzMlItPe3B1jJgvF5k1fxIjYJ92iPqfAD8DpSEWACbflIUcmhIyg16iwES6AmLnhuKbRmH5LHwuNQf2umrPidtGxSIh0JJ08RDf4Bjnzony0JVQ5bxfAvgziEUkIH0GlJZy9Rjj3BgZnXQDOutg3zI1BLvQdFOTeDwoyjOI9oPyV17H1G2Hr+RAawCRTvlWoeBeB4or/SWLocx3jzk+M9+jB3UboQiYA9sD/8SFrwLIYSv0P6YqYJozkbws8o7wC8doIJeh+s/yiDrpOxQ6RW8B714GurbXwqQmN7jmRkL+BW5SN9MUfdASTk1EmIEGkCvD0+gOrgfzLl0ijwBmFOlsTMc54pK0qwf2cpQ91Njpd9xB8VDobj4A9kbEZS0liLZW43C7kyrWbpXT/a9cWmWJa7RVXsKICSKAjcqXn94Qkd6DqK79LMZd6WfXUUWCBk9ajVIF6MYB4EfVWH20xelI8f47t4D2w/S653kHE4w84LZmos9Yso9o457fADQ5M3SvCfx2I7ZOf9+y+WzlRr9nQ993uevRa/SN2ogcwT1Qw/FWIVQrxLhK6t4yDa7JwmLuIpJjvYE3D5nFtRH9byCUffcvH9mZsZrSG1tKyM+gYUgNQ98TBPdf+vO6p63k92Ds4eHbzPMZLSxgNsr1RoWxzvX2ifBTjZhd4RoLrDfPFEsRKJZLdn/HjVctBQmPCbVCGEOIaHXMoQPOjlvRJRe4ZeQ4FPH3UBdw2zcGqlObOpW1xaSte+rbo2KJri6BA7zvMJhDcannyk+mh22xRdAyx5Hg431lmfUzOw7MpSWuB4WYhl74T2NAANmTLe1OS0RGQPaUA5wngPMUwl+qsfCgFyxQcv8GpFq+O36zDzehITXQaBv0b01wTa9FzJiKlj4KrEixH++slMwd1S9sV64j2n8syXxS1Nvn0Zg+u+ep2wRnzmFWD8dJKFQN2k99UWt0ifJ4Y6IjhpdfyBx1vEHTcvtc/DQa9F/LkDSqe7IPtaNo0HoG+1fGI06jaKIUUdwOTwNtOuSzmXNfrd4OOf+oH3ulpFy6g77teC/5e3qjWNce4F2g8YKXq3rb5mIgyWW1eW6lECFyyUWp8tNkKznLKKE7nq2/aG8SK5FXCcGeE2ucHR5gObjYFYI+rrl1ZqXbGb40ZU0CRw7chsItgXkL5Jxzdx6nIeOHatR7sxvRi8jnGHYWhEIzAWnhh1qeFXDtbXpn5NwFUzOCHXCvANzjR/VDkS5PVdw7IZDUCro1QO/NdMwJebuXqjHRycFdosjv3ytPKtRlKnYB27bOo9uIbrIv/AFBLAwQUAAAACADiq1hVgvBM9HQDAABHEQAAFwAAAGdlb2dlYnJhX2RlZmF1bHRzM2QueG1s7ZjNctMwEIDP8BQa3Yl/Yid1py6TgQPMAFOGC1fVVhKBIxlJieO+Gu/AM7HSqq0DLZBOKNMOOWT1492Vvl1vpJw8364asuHaCCVLmoxiSrisVC3koqRrO392RJ+fPj1ZcLXg55qRudIrZkuauyev9KA3mqZem7VtSauGGSMqStqGWadS0o4SsjXiWKp3bMVNyyr+oVryFXujKma9laW17XEUdV03uvQ3UnoRgUkTbU0dLRZ2BJISWLQ0JQ2NY7C7o92NvV4ax0n08e0b9PNMSGOZrDglsKGaz9m6sQaavOErLi2xfcth6UqKagw+GnbOm5K+lhZ2ySu3RFKt9Qb0g3JJx0ke09OnT04qpXRtiNqWFBioHsUFig7AAiyc2+DcBuc6HOxwsPODkTNolqoj6vwTOC6p1WvwGhbkO/4ZmH6hGqWJLmkKHiBiSQzyHGSRQiiadsnA4iiJ8ZNkRZwkkyRF/Yb1XJMNA6PBK1tbVXmTfnTOGhN8eedvVc1xJgvPSwHZ4MgYyyHu4Ny0nNe+hTxhW5AEvc+noT0h+QfbN5zYpag+S24gnvlAyTVeibrmLi1Rh3+RqGLcd0lbpiGVrIZEw3mx4HIDxJQ2ZBv7RfQgwNqF67n03Ca+34OA2QsnYNirw0602JIZaszwwVmKYowiQ5EHYidRSJ6f0ohthRm/vAraLHQHmROPfebsG2hwDyThG6LsXrcQ478VUUiefxVTEtocdv3t669x+xezYtpyI5gcvL4v3MSP5CcPgfzf5H47SLAv+YDfme/v8IOyeid+ReEBpglIQOjlVYnKD4VxztxvVzBxa+W7iVgAdVumhhKPBRvrdajhvy0GrWr6Ja+1ktdcB0PXaMcB7V3epH3DkeRjH48cfzEGGT3KArW8mMTZJDtYbO6a4nuRnelqKVa85mwXLcT+vtCmCf4aZ1OP1onHwfash4osoDoMud5fyvqSAYsvkGv6aHL2TAuz2qWa3CPVCRZmpFpA7wFSldxe7fOdaw+rav6/qu7D8sua1f4EFrb6/rI/ZIoJesjSOMkK95lOkvwoyeBGcyBAhziXilXbiErYP7pp3HjPcIN4mehRXIAI3va9epDZBMUUxRGK4rcnEbPWc7h533RSDlO7Qc7uFmTQu/GsPJr+adZfG76X0/JQ6Zen5Wjwx0F0+S/F6XdQSwMEFAAAAAgA4qtYVdY3vbkZAAAAFwAAABYAAABnZW9nZWJyYV9qYXZhc2NyaXB0LmpzSyvNSy7JzM9TSE9P8s/zzMss0dBUqK4FAFBLAwQUAAAACADiq1hV2sY7TMsGAAAgGAAADAAAAGdlb2dlYnJhLnhtbO1YW4/aOBR+bn+FlecBcgcqaDVTrXYrTS/qdFerfXMSA94JcZSYAar++P2OnYQwF7V0tpeHAsGxfXwu3zk+PsnsxW6dsxtR1VIVc8cbug4TRaoyWSznzkYvBhPnxfOns6VQS5FUnC1UteZ67kRE2a1Dbzj2zWpelnMnzXldy9RhZc41LZk7W4fJbO6IeBy64SQZLCbTZBAusnSQpO5iEE9j10vi8SKKuMPYrpbPCvWGr0Vd8lRcpSux5pcq5drIW2ldPhuNttvtsNVsqKrlCMLr0a7ORstlMkTrMJhX1HOnuXkGvkert4FZ57uuN/r79aWVM5BFrXmRCoeR6Rv5/OmT2VYWmdqyrcz0CgZHMHUl5HIFLPwwctiIiEoAUopUyxtRY2mva4zX69IxZLyg+Sf2juWdXQ7L5I3MRDV33GEQH38hRFVSFLoh9hqho5bd7EaKreVLd0Zk6E7HcJSsZZKLubPgeQ2zZLGogG3Xr/U+FwmHWF1t0D9o5J3hCwL5EdShC6stEJhx3TO6xrgMHKRMX7LDtFK54eqyaMo+fWK+67vsjBrPNj6aOLZTrh1zA9vQFJrQNpGlCe3y0JKGlia0NGFwiqHNwJGlrZ3BfXbGuAwAt+yc9OwEncc+MTS+bQJGeuMG+lMTNl2YTM3YNJ5rGyw1oxP6M3jFj7QIiHyFRcChk2rj4YR4aSVGIYD5Uon+o+zsrEScwBk8mTvnl7//dvH+/K4GfvSAzY+EulXBo53QCoUs8zPXHZHBSVY/CPQJEuOjPfm9pXs+IuL/wDicfLHMMQXEIQu1Kci2Zr9REvreSEQeRPbVYh6LkDki5k0pIVJa8JkXsRAjE4yMWUBjkReygBGJFzCT9UKTQWLM0DT+kYkZEskZg2EM6RVG+pRQo4hFIBvTWspNMfILViExG2pohCugsSDAZcaCEBel2AiMIssGekRBbO4i8z+hNZASEazMTGEsnEIcDURjjwXQBP2xy8AX7KGxsQbJnH4es3l8zPwJM1wNf/dxSeGLo2U2ao/NWeMSVq+Itkl9WqxRQJiYAc9S1bITsBI5ip1GtOEli3Kjm/XNeLqmk9/w0uoWeabS64tOYDMjeI2i4kCGA/5QR9gD/6jMeDLLeSJyVGxXBAdjNzyn7W0kLFShWRuhPo3NRqaimYlNmstM8uIvmN9WD28260RUwB23imw0TGg560ofSuxt6eNNGzmpUlV2ta+BFtv9Iyos9j2Uhf0P8vTeTgVeOJz2P3BWysnRkXu8Bijvm6lwerxmElvR4uZKaA3za8Z3Ar5qoFtWtNd6nVf1hcoPQ6WShX7JS72pTLUL9Sqy6rxY5sJAaQ4mlITpdaJ2V/aIwTlBvD7sS/Qa45PlS5WriiEO/QhlGpiZFgcRtYaGVOuoEHqgwT8oGh7EtJv3phAMCtOChlpDBS9b1RpTAY8102vY8J2sTY4B86OoMjFCFeamkPqy7WiZXjem0obBAhsBYG1C9phnQ/J4nrPRreibXYuqELmNpALO3KhNbQPZyjKKbGrxjuvVeZG9F0tswnecsoEGa0t6UDkTqVxjoR1vwOPk2D+hqh3NxLISrYm5eYiw0Db7h9VlJXhWr4RApB/FeZ/MmNOqP0P1kQuT6NcSSQJc1nxnuWmB3W/p67SSJYUsS5CxrsUhKDNZE4dugKiBSA3TsN9VAXQ1IYsHrY1eKcQK1nBNI7Snc7HGAwLTJjpNgHdeOjePHuQOppJ/kT26s8zOH8DD9L2RamKa5+WKd3DkfE/popdwDLfXKuvjQ9DDHUZ/CwMFRinITNxZbSm5gp3Zij2fGyNo71l+QX/0lhsa79QMgA/c4RRbdU/PptD6Y5PLEHgWos+AdfEdwXq7WNRCG6WpCoXK3vjnwtIfTlA5QrFgOEHyPxXMlz8GTGgKlVHd/UxYekM60QhJKsbvQzJV6zUvMlaYQuedyvdLVRgEbXHBXdrLjHsUpYz7hK8Fb6Pb+VLlEqsgisjwHobI8F6FB3MnsQIbMfe4zgpsndOxOj5+9ApZHq8dkNSplm1OQ3Pzh8wyYQokWzw86Pcemn3HexFOYoAdQX1zPnaeB3YnZJ2Hw7MWS+p1iqSfCdCTFT0xOW52Mpe82t858L4Gb4RBTtH6qqCDkapEHB93OF8LUVIN87b4UPGipnd0t89QvAOr+rGciQXf5Lopuor+KXg01Q/2GMoi2gdelzhwN428ful3kqv4L1d9E1e5Qz84qq7HeG1o8tTU5qkBSvbYjaKv9lzyy3PfxHO0t/peMU9TtOf8oYtyAq6bDqMwxEuvwzPVLcfhMDhUmOYJsXmp/vw/UEsBAhQAFAAAAAgA4qtYVY/1TEgVBQAAJSYAABcAAAAAAAAAAAAAAAAAAAAAAGdlb2dlYnJhX2RlZmF1bHRzMmQueG1sUEsBAhQAFAAAAAgA4qtYVYLwTPR0AwAARxEAABcAAAAAAAAAAAAAAAAASgUAAGdlb2dlYnJhX2RlZmF1bHRzM2QueG1sUEsBAhQAFAAAAAgA4qtYVdY3vbkZAAAAFwAAABYAAAAAAAAAAAAAAAAA8wgAAGdlb2dlYnJhX2phdmFzY3JpcHQuanNQSwECFAAUAAAACADiq1hV2sY7TMsGAAAgGAAADAAAAAAAAAAAAAAAAABACQAAZ2VvZ2VicmEueG1sUEsFBgAAAAAEAAQACAEAADUQAAAAAA=="
    }; 

    
  var applet;
  $('#insertEmbedMedia').on('click', () => {
    $('#embedMediaModal').toggleClass('popup-show');
    const ls = localStorage.getItem('graph-id');
    if(ls != null && ls.length > 5){
      parameters = {...parameters, ggbbase64 : ls};
      localStorage.removeItem('active-graph');
    }

// Needs to save the file first but its not working. It bypass before request is done correctly

    // $.ajax({
    //     url: API,
    //     type: 'POST',
    //     data: {img: 'image.png', base64: ls},
    //     success: (response)=>{
    //         console.log(response);
    //     }
    // });
   console.log(parameters);

      applet = new GGBApplet(parameters, true);
      applet.inject('modal');
//  when used with Math Apps Bundle, uncomment this:
//  applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
// window.onload = function() { applet.inject('modal');}
  });

  $('#doEmbedMedia').click(() => {
    const padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    $('#embedMediaModal').toggleClass('popup-show');
        var str = ggbApplet.getPNGBase64(1, true, 72); 
        $("#embedMediaSrc").val(str);
        ggbApplet.getBase64(function(b){
            $("textarea#state").val(b);
          });
       
    // var file = ggbApplet.writePNGtoFile('test.png', 1, false, 72);
    //window.open(window.location.origin+'/test.png');
    // console.log(file); 
    ggbApplet && ggbApplet.remove();
    return padeditor.ace.callWithAce((ace) => {
      const rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, 'E');
    //   const file = dataURLtoFile($("textarea#state").val(), 'help.png');
    //   console.log(file);
      ace.ace_performSelectionChange([rep.selStart[0], rep.selStart[1] - 1], rep.selStart, false);
      localStorage.setItem('graph-id', $("textarea#state").val());
      localStorage.setItem('embedMedia', escape($('#embedMediaSrc').val()));
      ace.ace_performDocumentApplyAttributesToRange(
          rep.selStart, rep.selEnd,
          [['embedMedia', 'mnbcvb']]);
    }, 'embedMedia');

    
  });

  $('#cancelEmbedMedia').click(() => {
  $('#embedMediaModal').toggleClass('popup-show');
     ggbApplet && ggbApplet.remove();
  });

// This ffunction is suppose to create an image out of base64 string but its not working as expected
 function dataURLtoFile(dataurl, filename) {
 
        // var arr = dataurl.split(',');
            var mime = 'image/png', //arr[0].match(/:(.*?);/)[1],
            bstr = atob(dataurl), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }





$("#insertMaths").click(function(){
    $(".result").empty();
    $("#mathsPopup").toggleClass('popup-show');
})

$("#cancelMaths").click(function(){
  $("#mathsPopup").toggleClass('popup-show');
  $(".maths-content #modal").empty();
  $("#mathsInput").val("");
})
});

$("#mathsInput").on("change keydown keyup", function(){
  $(".maths-content #modal").empty();
    Object.entries(data).forEach(([_, node])=>{
      for(let i = 0; i < node.data.length; i++){
        const content = node.data[i].content;
        if(content.name.includes($("#mathsInput").val().trim())){
          $(".maths-content #modal").append(`<li href="#"><strong>${content.usage.split('"')[1]}</strong><p><i>${content.description}:</i> e.g <div style="background-color: #f2f3f4; border-radius: 3px; padding: 5px">${content.example}</div></p></li>`);
        }
      }
    })
  });

  $('#evalMaths').click(function(){
    $(".result").html(`<code>${nerdamer($('#mathsInput').val()).evaluate().text()}</code>`);
  });

  $('#doEmbedMaths').click(function(){
    const padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    $("#mathsPopup").toggleClass('popup-show');
    const eq = $("#mathsInput").val();
    const result = $("div.result").text();
    $(".maths-content #modal").empty();
    $("#mathsInput").val("");
    return padeditor.ace.callWithAce((ace) => {
        const rep = ace.ace_getRep();
        ace.ace_replaceRange(rep.selStart, rep.selEnd, `${eq} => ${result}`);
    },'embedMedia')
  })