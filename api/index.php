<?php
require_once '../vendor/autoload.php';
//require_once 'app/File.php';

spl_autoload_register(
    function ($className) {
        $fileName = __DIR__ . '/' . str_replace('\\', '/', $className) . ".php";
        if (file_exists($fileName)) {
            require_once($fileName);
        } else {
            echo "$fileName not found<br>\n";
        }
    }
);

use app\File;

$method = $_SERVER['REQUEST_METHOD'];
$query = $_SERVER['QUERY_STRING'];
$request = $_SERVER['REQUEST_URI'];
$request = explode('?', $request)[0];

$request = str_replace('/api/', '', $request);

switch ($request) {
    case ('upload-file'):
        uploadFile($_POST);
        break;
    case ('files'):
        getFiles();
        break;
    default:
        http_response_code(404);
        echo json_encode(['status' => 'fail', 'message' => 'Path not found']);
}

function uploadFile($data)
{
    $fileName = $data['fileName'];
    $author = $data['author'];
    $categories = $data['categories'];
    $date = $data['date'];

    $fileType = explode('/', $_FILES['file']['type'])[1];

    $uploadDir = $_SERVER['DOCUMENT_ROOT'] . '/public/files/';
    $publicFilePath = $_SERVER['SERVER_NAME'] . '/public/files/' . basename($_FILES['file']['tmp_name']);
    $filePath = $uploadDir . basename($_FILES['file']['tmp_name']) . ".$fileType";

    if ($err = move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {

        $fileData = [
            'name'       => $fileName,
            'path'       => $filePath,
            'public_path'       => $publicFilePath,
            'author'     => $author,
            'categories' => $categories,
            'date'       => $date,
        ];

        $file = new File();
        $file->addFile($fileData);

        $response = json_encode([
            'status'  => 'success',
            'message' => 'OK',
            'data'    => [
                'url' => $publicFilePath,
            ]]);

        successResponse($response);

    } else {
        $response = json_encode(['status' => 'error', 'data' => [], 'message' => 'Somthing went wrong', 'error' => $err]);
        exceptionResponse($response);
    }
}

function getFiles()
{
    $file = new File();
    if ($files = $file->getFiles()) {

        $response = json_encode(['status' => 'success', 'data' => $files]);;
        successResponse($response);

    } else {

        $response = json_encode(['status' => 'error', 'data' => [], 'message' => 'Somthing went wrong', 'error' => "Can't fetch files"]);
        exceptionResponse($response);

    }
}

function exceptionResponse($response)
{
    http_response_code(400);
    die($response);
}

function successResponse($response)
{
    header('Access-Control-Allow-Origin: *');
    die($response);
}

