<?php

namespace app\core;

class Request
{
    public function getPath()
    {
        $path = $_SERVER['REQUEST_URI'] ?? "/";
        return $path;
    }

    public function getMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    public function isGet()
    {
        return $this->getMethod() === "get";
    }

    public function isPost()
    {
        return $this->getMethod() === "post";
    }

    public function getData()
    {
        if ($this->isPost()) {
            $data = json_decode(file_get_contents("php://input"));
            return $data;
        }
    }
}
