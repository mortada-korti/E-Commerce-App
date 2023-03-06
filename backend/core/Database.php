<?php

namespace app\core;

use PDO;
use PDOException;

class Database
{
    public PDO $pdo;
    private $host = "localhost";
    private $user = "root";
    private $db = "store";
    private $pw = "";

    public function __construct()
    {
        $this->pdo = $this->connect();
    }

    public function connect()
    {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->db";
            $pdo = new PDO($dsn, $this->user, $this->pw);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            return $pdo;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
