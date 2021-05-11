<?php
require_once '../vendor/autoload.php';

$get = $_GET;
echo $_SERVER['QUERY_STRING'];
die('lol');
$method = $_SERVER['REQUEST_METHOD'];
$query = $_SERVER['QUERY_STRING'];
$request = $_SERVER['REQUEST_URI'];

?>


