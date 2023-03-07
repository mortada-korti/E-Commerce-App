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

$app->router->post("/api/products", [ProductsController::class, "ProductList"]);
$app->router->get("/api/subcategories", [ProductsController::class, "SubCategoriesList"]);

$app->router->post("/api/categories/filter", [ProductsController::class, "FilterByCategories"]);
$app->router->post("/api/subcategories/filter", [ProductsController::class, "FilterBySubCategories"]);


$app->run();
