<?php
$reg_exps = [];
//Name   
$reg_exps[0] = '/^[а-яА-Яа-яА-ЯїЇіІa-zA-Z ]{2,30}$/';
//Surname
$reg_exps[1] = '/^[а-яА-Яа-яА-ЯїЇіІa-zA-Z ]{2,30}$/';
//Phone
$reg_exps[2] = '/^(050|066|067|098|097|096|068|039|063|093|099|095){1}[0-9]{7}$/';
//Email
$reg_exps[3] = '/^[a-zA-Z0-9.]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/';  
//Password
$reg_exps[4] = '/^[a-zA-Z0-9]{6,20}/';

// if(!empty($_POST)){
//     $inputs_name = ['name', 'surname', 'phone', 'email', 'password'];
//     $errors=[];
//     for($i=0; $i<5;$i++){
//         if(!isset($_POST[$inputs_name[$i]])
//         ||!trim($_POST[$inputs_name[$i]])
//         ||!preg_match($reg_exps[$i],$_POST[$inputs_name[$i]])){
//             $errors[$i]='';    
//         }
//         else{
//             $errors[$i]=$inputs_name[$i];
//         }
        
//     } 
// }









echo(json_encode([
    "name" => "a",
    "surname" => "a",
    "phone" => "a",
    "email" => "a",
    "password" => "a",
    "validate" => true
]));

?>



