<?php
require('../vendor/autoload.php');

$get = $_GET;
dump($_SERVER['QUERY_STRING']);
$method = $_SERVER['REQUEST_METHOD'];
$query = $_SERVER['QUERY_STRING'];
$request = $_SERVER['REQUEST_URI'];


