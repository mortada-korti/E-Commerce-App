<?php

namespace app\core;

class Model extends Database
{

    public function getAllProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if (is_array($result) && count($result)) {
            return $result;
        }
        return false;
    }
}
