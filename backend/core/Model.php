<?php

namespace app\core;

class Model extends Database
{

    public function getAllProducts($data)
    {
        $str = "";
        if (!empty($data->subCats)) {
            $str = "AND product_subCatId IN(" . implode(", ", $data->subCats) . ")";
        }
        $sql = "SELECT * FROM products WHERE product_catId = $data->catId " . $str . "ORDER BY price $data->sort";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if (is_array($result) && count($result)) {
            return $result;
        }
        return false;
    }

    public function getSubCats()
    {
        $sql = "SELECT * FROM subcategories";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if (is_array($result) && count($result)) {
            return $result;
        }
        return false;
    }

    public function getCategoryProducts($catId)
    {
        $sql = "SELECT * FROM products WHERE product_catId = $catId";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if (is_array($result) && count($result)) {
            return $result;
        }
        return false;
    }

    public function getSubCategoryProducts($subCatId)
    {
        $sql = "SELECT * FROM products WHERE product_SubCatId IN (" . implode(", ", $subCatId) . ")";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if (is_array($result) && count($result)) {
            return $result;
        }
        return false;
    }
}
