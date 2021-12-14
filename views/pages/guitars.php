<?php 
require_once("../../include/db.php");
$db=new DB([ 'host'=> 'Volt',
    'user'=> 'root',
    'password'=> 'root',
    'db'=> 'volt'
    ]);







$page=1;
$limit=5;
$rowscount=$c['count'];
$rowscount=0;

if(isset($_REQUEST["search"]))$search=$_REQUEST["search"];
$sql_search="";

if($search) {
    $sql_search.="WHERE `name` LIKE '".$search."%'"." OR ".
    "`neck_material` LIKE '".$search."%'"." OR ".
   "`price` = '".$search."' OR ".
   "`scale` = '".$search."' OR ".
   "`number_frets` = '".$search."' OR ".
   "`number_strings` = '".$search."'";
}

$sql_count="SELECT COUNT(*) as 'count' FROM `guitars` ".$sql_search;
$c=$db->queryOne($sql_count);
if($c)$rowscount=$c["count"];
$pagecount=ceil($rowscount / $limit);
$sql="SELECT * FROM guitars ".$sql_search;

if (isset($_REQUEST['page']) && is_numeric($_REQUEST['page']) && $_REQUEST['page'] > 0) {
    $page=(int)$_REQUEST['page'];
}

if ($page > $pagecount) $page=$pagecount;

if ($rowscount > 0) {
    $first=($page - 1) * $limit;
    $sql.= " LIMIT ". $first . ",". $limit;
    $rows=$db->queryRows($sql);
}

else {
    $rows=[];
}


echo json_encode([ 
    'pagination'=> [ 
        'rowscount'=> (int)$rowscount,
        'limit'=> $limit,
        'page'=> $page,
        'pagecount'=> $pagecount
    ],
    'search'=>$search,
    'rows'=> $rows]);


?>