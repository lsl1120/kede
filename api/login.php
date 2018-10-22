<?php
	include 'connect.php';
	
	//验证用户名密码
	$lgName = isset($_POST['lgName']) ? $_POST['lgName'] : '';
	$lgPass = isset($_POST['lgPass']) ? $_POST['lgPass'] : '';
	
	//查询用户名密码是否存在数据库
	$sql = "select * from users where username = '$lgName' and password = '$lgPass'";
	
	//执行sql语句
	$res = $conn -> query($sql);
	
	if($res -> num_rows > 0){
		echo 'yes';
	}else{
		echo 'no';
	}
	
?>