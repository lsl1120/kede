<?php
	//接收前端传过来的用户名，然后匹配数据库，查询是否存在该用户名
	header("content-type:text/html;charset=utf-8");
	
	include 'connect.php';
	
	$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
	
	//写查询语句
	$sql = "select * from users where username = '$phone'";
	
	//执行查询语句
	$res = $conn -> query($sql);
	
	//获取里面的结果集
//	$row=$res->fetch_all(MYSQLI_ASSOC);
//	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	if($res -> num_rows > 0){
		echo 'no';
		
	}else{
		echo 'yes';
	}
	
	//关闭连接数据库
	$res->close();//关闭结果集
    $conn->close();//关闭数据库的链接
?>