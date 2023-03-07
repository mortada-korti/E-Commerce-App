<?php

namespace app\core;

class Router
{
    public Request $request;
    public array $routes = [];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    public function get($path, $callback)
    {
        $this->routes['get'][$path] = $callback;
    }

    public function post($path, $callback)
    {
        $this->routes['post'][$path] = $callback;
    }

    public function resolve()
    {
        $path = $this->request->getPath();
        $method = $this->request->getMethod();
        $callback = $this->routes[$method][$path] ?? null;
        if ($callback === null) {
            return header("HTTP/1.1 500 Internal Server Error");
        }
        if (is_array($callback)) {
            $callback[0] = new $callback[0]();
            return call_user_func($callback, $this->request);
        }
        return call_user_func($callback);
    }
}
