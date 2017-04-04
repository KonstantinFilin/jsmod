<?php 

$params = !empty($_POST) ? $_POST : [];
header("Content-Type: text/json");
echo json_encode($params);
