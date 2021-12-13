<?php
require_once("include/db.php");
require_once("include/app.php");


(new App())->Run([
    'db' => [
        'host' => 'Volt',
        'user' => 'root',
        'password' => 'root',
        'db' => 'volt'
        ]
]);

