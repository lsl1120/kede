<?php
	include 'connect.php';
	
	//验证用户名密码
	$lgName = isset($_POST['lgName']) ? $_POST['lgName'] : '';
	$lgPass = isset($_POST['lgPass']) ? $_POST['lgPass'] : '';
	
	//查询用户名密码是否存在数据库
	$sql = "select * from users where username = '$lgName'";
	$sql2 = "select * from users where username = '$lgPass'";
	
	//执行sql语句
	$res = $conn -> query($sql);
	$res2 = $conn -> query($sql2);
	
	if($res -> num_rows > 0 && $res2 -> num_rows > 0){
		echo 'yes';
	}else{
		echo 'no';
	}
	
?>