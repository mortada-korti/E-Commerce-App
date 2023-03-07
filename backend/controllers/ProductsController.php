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

    public function FilterByCategories(Request $request)
    {
        $catId = $request->getData();
        $products = $this->model->getCategoryProducts($catId);
        return json_encode($products);
    }

    public function FilterBySubCategories(Request $request)
    {
        $subCatId = $request->getData();
        $products = $this->model->getSubCategoryProducts($subCatId);
        return json_encode($products);
    }
}
