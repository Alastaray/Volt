<?php
require_once("db.php");
$db = new DB([
    'host' => 'Volt',
    'user' => 'root',
    'password' => 'root',
    'db' => 'volt'
]);

$reg_exps = [];
$reg_exps['email'] = '/^[a-zA-Z0-9.]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/';
$reg_exps['password'] = '/^[a-zA-Z0-9]{6,20}/';

$errors = [];
$inputs_name = ['email', 'password'];
$validate = true;
if (!empty($_POST)) {
    foreach($inputs_name as $input) {
        if (!isset($_POST[$input]) ||
            !trim($_POST[$input]) ||
            !preg_match($reg_exps[$input], $_POST[$input])) {
            $errors[$input] = false;
            $validate = false;
        } else {
            $errors[$input] = true;
        }

    }
}

if ($validate) {
    $issetemail = false;
    $issetpassword = false;
    $sql = 'SELECT * FROM `users`';
    $rows = $db->queryRows($sql);

    foreach($rows as $row) {
        if ($_POST['email'] == $row['email'] && $_POST['password'] == $row['password']) {
            if ($_POST['email'] == $row['email'])$issetemail=true;
            if ($_POST['password'] == $row['password'])$issetpassword=true;
        }
    }

    echo(json_encode([
        "email" => $issetemail,
        "password" => $issetpassword,
        "validate" => $validate
    ]));


} else {
    echo(json_encode([
        "email" => $errors["email"],
        "password" => $errors["password"],
        "validate" => $validate
    ]));
}



?>