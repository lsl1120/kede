<?php
	
	//接收手机号和密码，插入到数据库
	include 'connect.php';
	
	$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
	$pass = isset($_POST['pass']) ? $_POST['pass'] : '';
	
	//插入到数据库
	$sql = "insert into users(username,password) values('$phone','$pass')";
	
	$res = $conn -> query($sql);
	
	if($res){
		echo 'yes';
		
	}else{
		echo 'no';
	}

?>