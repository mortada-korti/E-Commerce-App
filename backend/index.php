<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');

require_once "./vendor/autoload.php";

use app\core\App;
use app\controllers\ProductsController;

$app = new App();

$app->router->get("/", function () {
    return "Hello World";
});

$app->router->get("/api/products", [ProductsController::class, "ProductList"]);

$app->run();
