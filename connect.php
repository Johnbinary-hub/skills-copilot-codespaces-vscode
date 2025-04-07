<?php


$host="localhost";
$user"root";
$pass="";
$db="login";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_errer){
    echo "failed to connect db".$conn->connect_error;
}
?>