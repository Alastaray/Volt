<link rel="stylesheet" href="css/product.css">
<div class="adminprod">
<?php
     $rows = ($this->db)->queryRows("SELECT * FROM guitars LIMIT 3" );
    foreach($rows as $row)
     {
        ?>
        <div class="product">
        <div class="card">
            <div class="price"><div><?echo($row["price"]." UAH")?></div></div>
            <button id="more">Подробнее</button>
            <img class="img" src=<?echo($row["path"])?>>
        </div>       
        <div class="name"><div><?echo($row["name"])?></div></div>
    </div>
    <?php
     }
    ?>

</div>