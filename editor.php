<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST, GET');


	$db_host = 'localhost';
	$db_user = 'root';
	$db_password = 'root';
	$db_db = 'etherpad';
	
	$mysqli = @new mysqli(
		$db_host,
		$db_user,
		$db_password,
		$db_db
	);
		
	if ($mysqli->connect_error) {
		echo 'Errno: '.$mysqli->connect_errno;
		echo '<br>';
		echo 'Error: '.$mysqli->connect_error;
		exit();
	}

	
  // For for first time saving /api/v1/save/image (POST)
	if(isset($_POST['base64']) && !empty($_POST['base64'])){
	  //There was a base64 string sent!
	  $image = $_POST['img']; //Try to Sanitize for security purpose
	  $base64 = $_POST['base64']; //Try to Sanitize for security purpose
	  if(empty($image)) {
		//Its a new graph to be generated
		$img =  substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 15).".png"; //Generate a unique ID to store the name of the Image
		$sql = "INSERT INTO `graphimage` (`uuid`, `base64`) VALUES($img, $base64)";
	}
	  else{
		$img = $image;
		$sql = "UPDATE `graphimage` SET `base64` = $base64 WHERE `uuid` = $img";
	  }

	  if(!is_dir(("/img"))) mkdir("/img");
		// create the image from the base64 string
		file_put_contents("/img/".$img, base64_decode($base64));
    
		//Store it in the DB here.
		//  --+---------------------+------------------------+----------------------+
		//  --+__id(AUTO INCREMENT)_|___uuid($img)_____|___base64($base64)__|
		$query = mysqli_query($mysqli, $sql);
		if($query){
			exit(json_encode(array('img'=>$img)));
		}
		
	}

  // For editing an existing one: /api/v1/get/image (GET)
  if(isset($_GET['src']) && !empty($_GET['src'])){
    $src = $_POST['src']; // Sanitize it!
    /// Get from the DB where 'image_name' == $src
    return json_encode($result); // I will do the rest.
  }
$mysqli->close();
?>