var isPhone = false;
var isPass = false;
var isyzm = false;

$(function(){
	//验证电话号码
	$('#username1').blur(function(){
		//验证手机号码规则
		var isMobile = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
		//获得用户填写的号码，并且赋值给phone
		$phone = $("#username1").val();
//		console.log($phone)
		$.ajax({
			url:"../api/res.php",
			type:"post",
			data:{
				"phone":$phone,
			},
			success:function(obj){
//				console.log(obj)
				if(obj == 'yes' && isMobile.test($phone)){
					//可以注册
					$('#verifyUserNameMsg').html('用户名可以注册');
					isPhone = true;
				}else{
					//不可以注册
					$('#verifyUserNameMsg').html('用户名已存在或请输入11位电话号码');
					isPhone = false;
				}
			}
		})
		
	})
	
	//密码验证
	$('#password1').keyup(function(){
		$pass = $('#password1').val();
		var passzhengze = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
//		console.log($pass)
		if(passzhengze.test($pass)){
			$('#p_verifyUserNameMsg').html('密码正确')
			isPass = true;
		}else{
			$('#p_verifyUserNameMsg').html('请输入字母、数字6-20位密码');
			isPass = false;
		}
		
	})
	
	//随机验证码
	$('.yanzhengma').click(function(){
		//stochastic随机的，猜测的
		
		var $stochastic = new Array();
		var $obj = new Array();
		var $arr = new Array(['a'],['b'],['c'],['d'],['f'], ['g'], ['h'], ['i'], ['j'], ['k'], ['l'], ['m'], ['n'], ['o'], ['p'], ['q'], ['r'], ['s'], ['t'], ['u'], ['v'], ['w'], ['x'], ['y'], ['z'],
		['A'], ['B'], ['C'], ['D'], ['E'], ['F'], ['G'], ['H'], ['I'], ['J'], ['K'], ['L'], ['M'], ['N'], ['O'], ['P'], ['Q'], ['R'], ['S'], ['T'], ['U'], ['V'], ['W'], ['X'], ['Y'], ['Z']
	);
		$i = parseInt(Math.random() * 50);
		$j = parseInt(Math.random() * 10);
		$l = parseInt(Math.random() * 50);
		$h = parseInt(Math.random() * 10);
		$k = parseInt(Math.random() * 2);
		
		$stochastic.push($j, $arr[$i][0], $h, $arr[$l][0]);
//		console.log($stochastic)
		$(this).html($stochastic);
	
	});
	
	//验证码确认
	$('#yzm').blur(function(){
		$code = $('#yzm').val();
		$codenumber = $('.yanzhengma').html();
//		console.log($code)
//		console.log($codenumber)
		
		if($code.toLowerCase() == $codenumber.toLowerCase()){
			$('#y_verifyUserNameMsg').html('验证码正确');
			isyzm = true;
		}else if($code.toLowerCase() != $codenumber.toLowerCase() || $code.toLowerCase() == ''){
			$('#y_verifyUserNameMsg').html('请重新输入验证码');
			isyzm = false;
		}
	})
	
	function res(){
		$('#resbtn').click(function(){
			if(isPhone && isPass && isyzm){
				var $phone = $('#username1').val();
				var $pass = $('#password1').val();
				
				$.ajax({
					type:"post",
					url:"../api/resbtn.php",
					async:true,
					data:{
						'phone':$phone,
						'pass':$pass,
					},
					success:function(obj){
						console.log(obj)
						if(obj == 'yes'){
							alert('注册成功');
							window.location.href = "login.html";
						}else{
							alert('注册失败');
							return false;
						}
					}
				});
			}
			
		})
	}
	
	res();
	
})
