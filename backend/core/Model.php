<?php

namespace app\core;

class Model extends Database
{

    public function getAllProducts($data)
    {
        $str = "";
        $order = "ORDER BY product_id DESC";
        if (!empty($data->subCats)) {
            $str .= "AND product_subCatId IN(" . implode(", ", $data->subCats) . ")";
        }
        if (!is_null($data->sort)) {
            $order = "ORDER BY price $data->sort";
        }
        $sql = "SELECT * FROM products WHERE product_catId = $data->catId " . $str . " AND price < $data->maxPrice " . $order;
        return $this->query($sql);
    }

    public function getSubCats()
    {
        $sql = "SELECT * FROM subcategories";
        return $this->query($sql);
    }

    public function getProductInfo($productId)
    {

        $sql = "SELECT p.*, sc.name as subCatName, c.title as catName FROM products p JOIN subcategories sc ON p.product_subCatId = sc.subcat_id JOIN categories c ON p.product_catId = c.cat_id WHERE p.product_id = $productId";
        return $this->query($sql);
    }

    public function getProductType($productType)
    {
        $sql = "SELECT * FROM products WHERE type = $productType";
        return $this->query($sql);
    }

    public function addProduct($inputs)
    {
        $data = (array) $inputs;
        $keys = array_keys($data);
        $params = array_map(fn ($attr) => ":$attr", $keys);
        $sql = "INSERT INTO products(`" . implode("`, `", $keys) . "`) VALUES(" . implode(", ", $params) . ")";
        $stmt = $this->pdo->prepare($sql);
        foreach ($keys as $attribute) {
            $stmt->bindValue(":$attribute", $data[$attribute]);
        }
        $result = $stmt->execute();
        return $result;
    }

    public function deleteProduct($productId)
    {
        $sql = "DELETE FROM products WHERE product_id = $productId";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute();
        return $result;
    }

    public function getCategory($catId)
    {
        $sql = "SELECT * FROM categories WHERE cat_id = $catId";
        return $this->query($sql);
    }
}
