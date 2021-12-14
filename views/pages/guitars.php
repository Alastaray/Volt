
<?php
    $rowscount=0;
    $params=[];
    if(isset($_REQUEST["search"]))$search = $_REQUEST["search"];
    $sql_search = "";
    if($search){
        $sql_search.="WHERE `name` LIKE '".$search."%'"." OR ".
             "`neck_material` LIKE '".$search."%'"." OR ".
            "`price` = '".$search."' OR ".
            "`scale` = '".$search."' OR ".
            "`number_frets` = '".$search."' OR ".
            "`number_strings` = '".$search."'";
        $params["search"]=$search;
    } 
    $sql_count="SELECT COUNT(*) as 'count' FROM `guitars` ".$sql_search;
  
    $c=$this->db->queryOne($sql_count);
    if($c)$rowscount=$c["count"];
    $page=1;
    if(isset($_REQUEST["page"])&&is_numeric($_REQUEST["page"])&&$_REQUEST["page"]>=1)$page=$_REQUEST["page"];
    $limit=5;
    $pag = new Pagination([       
        "rows"=>$rowscount,
        "limit"=>$limit,
        "limitPages"=>5,
        "page"=>$page,
        "params"=>$params
    ]);
    $sql="SELECT * FROM guitars ".$sql_search;
    $sql.= " LIMIT ".$pag->GetFirstRow().", ". $pag->GetLimit();
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
                            <?=$row["price"]." UAH"?>
                        </div>
                    </div>
                    <button id="more">Подробнее</button>
                    <img class="img" src=<?=$row["path"]?>>
                </div>
                <div class="name">
                    <div>
                        <?=$row["name"]?>
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
    