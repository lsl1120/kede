$(function(){
	$('#lgbtn').click(function(){
		//获取账号密码并且和数据库中的数据匹配
		$lgName = $('#username2').val();
		$lgPass = $('#password2').val();
//		console.log($lgPass)
//		console.log($lgName)
		$.ajax({
			type:"post",
			url:"../api/login.php",
			async:true,
			data:{
				"lgName" : $lgName,
				"lgPass" : $lgPass,
			},
			success:function(obj){
				console.log(obj)
				console.log($lgName)
				console.log($lgPass)
				
				if(obj == 'yes'){
					alert('登录成功');
					window.location.href = '../index.html';
				}else{
					alert('用户名或密码错误，请重新输入');
					return false;
				}
			}
		});
	})
})
