<?php
	include 'connect.php';
	
	$sql = "select * from list_sql";
	
	$res = $conn -> query($sql);
	
	$row=$res -> fetch_all(MYSQLI_ASSOC);
	
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	//关闭连接数据库
	$res->close();//关闭结果集
	
    $conn->close();//关闭数据库的链接

?>