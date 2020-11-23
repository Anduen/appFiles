<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Accept');

if(isset($_GET["Username"]) && isset($_GET["Password"]) && isset($_GET["uuid"])){
	
$Username = $_GET["Username"];
$Password = md5($_GET["Password"]);
$UUID = $_GET["uuid"];

if (file_exists("../Users/$Username.json") && (json_decode(file_get_contents("../Users/$Username.json")))->Password == $Password){
$new_uuid = json_decode(file_get_contents("../Users/$Username.json"));
$new_uuid->uuid = $UUID; 
file_put_contents("../Users/$Username.json", json_encode($new_uuid));
die("Success");
} else if(file_exists("../Users/$Username.json") != true){
die("Wrong Username");
} else if ((json_decode(file_get_contents("../Users/$Username.json")))->Password != $Password){
die("Wrong Password");
}
}

?>