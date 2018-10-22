<?php
	header("content-type:text/html;charset=utf-8");
	
	include 'connect.php';
	
	
	$sql = "select * from list_f2";
	
	$res = $conn -> query('SET NAMES utf8');
	$res = $conn -> query($sql);
	
	$row = $res -> fetch_all(MYSQLI_ASSOC);
	
	//把数组转为字符串
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	//关闭连接数据库
	$res->close();//关闭结果集
	
    $conn->close();//关闭数据库的链接
?>