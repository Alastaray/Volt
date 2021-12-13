
<?php
    $rowscount=0;
    $c=$this->db->queryOne("SELECT COUNT(*) as 'count' FROM `guitars`");
    if($c)$rowscount=$c["count"];
    $page=1;
    if(isset($_REQUEST["page"])&&is_numeric($_REQUEST["page"])&&$_REQUEST["page"]>=1)$page=$_REQUEST["page"];
    $limit=5;
    $pag = new Pagination([       
        "rows"=>$rowscount,
        "limit"=>$limit,
        "limitPages"=>5,
        "page"=>$page      
    ]);
    $sql="SELECT * FROM guitars ";
    $sql.= "LIMIT ".$pag->GetFirstRow().", ". $pag->GetLimit();
    $rows = ($this->db)->queryRows($sql); 
    $pagination= $pag->show();
    $active = "?page=";
    ?>
   
    <link rel="stylesheet" href="css/product.css">
    <div class="guitars">
    <a class="pointer" href=<?echo("?page=".($pag->GetActive()-1)."&");?>><img src='/images/page/pointer_left.png'></a>
        <div class="adminprod">
            <?php
    foreach($rows as $row)
     {
        ?>
            <div class="product">
                <div class="card">
                    <div class="price">
                        <div>
                            <?echo($row["price"]." UAH")?>
                        </div>
                    </div>
                    <button id="more">Подробнее</button>
                    <img class="img" src=<?echo($row["path"])?>>
                </div>
                <div class="name">
                    <div>
                        <?echo($row["name"])?>
                    </div>
                </div>
            </div>
            <?php
     }
     
    ?>

        </div>
        <a class="pointer" href=<?echo("?page=".($pag->GetActive()+1)."&");?>><img src='/images/page/pointer_right.png'></a>
    </div>
    <?php
    