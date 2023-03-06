<?php

namespace app\controllers;

use app\core\Model;

class ProductsController
{
    public function ProductList()
    {
        $model = new Model();
        $products = $model->getAllProducts();
        return json_encode($products);
    }
}
