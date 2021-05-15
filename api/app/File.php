<?php

namespace app;

class File
{
    private $sep = ';;';

    public function addFile($file)
    {
        try {
            $content = file_get_contents('./filesUploaded.csv');
            $rows = array_filter(explode("\n", $content));
            $id = sizeof($rows);

            $newFile = [$id, $file['name'], $file['path'], $file['public_path'], $file['author'], $file['categories'], $file['date']];
            $row = "\n" . implode($this->sep, $newFile);

            file_put_contents('./filesUploaded.csv', $row, FILE_APPEND);
            return true;

        } catch (\Exception $e) {
            return false;
        }
    }

    public function getFiles()
    {
        $content = file_get_contents('./filesUploaded.csv');
        $rows = explode("\n", $content);
        $rows = array_filter($rows);

        $header = explode($this->sep, $rows[0]);
        unset($rows[0]);

        $rows = array_map(function($row) use ($header) {
            $fields = explode($this->sep, $row);
            if ($fields) {
                return array_combine($header, $fields);
            } else return false;
        }, $rows);

        return $rows;
    }

}