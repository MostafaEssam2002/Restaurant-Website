<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json");

$pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$categories = $pdo->query("SELECT name FROM categories")->fetchAll(PDO::FETCH_COLUMN);
$products = $pdo->query("SELECT id, name, price, image, 
    (SELECT name FROM categories WHERE categories.id = products.category_id) as category 
    FROM products")->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    "categories" => $categories,
    "products" => $products
]);
