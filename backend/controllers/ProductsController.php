<?php

namespace app\controllers;

use app\core\Model;
use app\core\Request;

class ProductsController
{
    private Model $model;

    public function __construct()
    {
        $this->model = new Model();
    }

    public function ProductList(Request $request)
    {
        $data = $request->getData();
        $products = $this->model->getAllProducts($data);
        return json_encode($products);
    }

    public function SubCategoriesList()
    {
        $subCats = $this->model->getSubCats();
        return json_encode($subCats);
    }

    public function ProductInfo(Request $request)
    {
        $productId = $request->getData();
        $product = $this->model->getProductInfo($productId);
        return json_encode($product);
    }

    public function ProductType(Request $request)
    {
        $productType = $request->getData();
        $products = $this->model->getProductType($productType);
        return json_encode($products);
    }

    public function ProductAdd(Request $request)
    {
        $inputs = $request->getData();
        $result = $this->model->addProduct($inputs);
        if (!$result) return "error";
    }
}
