<?php

require_once("db.php");
$db = new DB([
    'host' => 'Volt',
    'user' => 'root',
    'password' => 'root',
    'db' => 'volt'
    ]);

$reg_exps = [];
$reg_exps['name'] = '/^[а-яА-Яа-яА-ЯїЇіІa-zA-Z ]{2,30}$/';
$reg_exps['surname'] = '/^[а-яА-Яа-яА-ЯїЇіІa-zA-Z ]{2,30}$/';
$reg_exps['phone'] = '/^(050|066|067|098|097|096|068|039|063|093|099|095){1}[0-9]{7}$/';
$reg_exps['email'] = '/^[a-zA-Z0-9.]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/';  
$reg_exps['password'] = '/^[a-zA-Z0-9]{6,20}/';

$errors=[];
$inputs_name = ['name', 'surname', 'phone', 'email', 'password'];
$validate = true;
if(!empty($_POST)){
    foreach($inputs_name as $input){
        if(!isset($_POST[$input])
        ||!trim($_POST[$input])
        ||!preg_match($reg_exps[$input],$_POST[$input])){
            $errors[$input]=false; 
            $validate=false;   
        }
        else{
            $errors[$input]=true;
        }
        
    } 
}



$comma = ", ";
$quote = "'";
if($validate){
    $sql = "INSERT INTO `users`(name,surname,phone,email,password) VALUES(";
    foreach($inputs_name as $input){
        if($input=="password")$sql .= $quote.$_POST[$input].$quote.")";
        else $sql .= $quote.$_POST[$input].$quote.$comma;
    }
    $insert=$db->query($sql);


    echo(json_encode([
        "insert" => $insert,
        "validate" => $validate
    ]));
}
else{
    echo(json_encode([
        "name" => $errors["name"],
        "surname" => $errors["surname"],
        "phone" => $errors["phone"],
        "email" => $errors["email"],
        "password" => $errors["password"],
        "validate" => $validate
    ]));
}




?>



