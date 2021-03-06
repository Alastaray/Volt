<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VOLT</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/win_client_enter.css">
    <link rel="stylesheet" href="css/product.css">
    <script defer src="js/js.js"></script>
</head>

<body>
    <div id="eclipse"></div>
    <header>
        <div>
            <div class="logo"></div>
        </div>
        <nav class="nav">
            <ul class="menu">
                <li><a id="home" href="#">Главная</a></li>
                <li><a id="guitars" href="#">Гитары</a></li>
                <li><a href="#">Коммутация</a></li>
                <li><a href="#">Звукозапись</a></li>
                <li><a href="#">DJ оборудование</a></li>
                <button id="reg-logo" class="reg"></button>
            </ul>
        </nav>
    </header>
    <?require_once('views/pages/reg.php');?>