<?php
$connect = mysqli_connect('localhost','root','wx75bf1118a84594cf','blog') or die('Unale to connect');
$sql = "set names utf8";
mysqli_query($connect,$sql);

$sql = "select * from users";
$result = mysqli_query($connect,$sql);
while($row = mysqli_fetch_row($result)){
    $list[]=$row;
}
echo '一共有' . count($list) . '个用户';
?>
