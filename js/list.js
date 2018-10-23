$(function(){
	$('.spfl').mouseover(function(){
		$('.sp').css('display','block');
	});
	
	$('.spfl').mouseout(function(){
		$('.sp').css('display','none');
	});
	
	//第一层数据渲染
	$goodid = null;
	$.ajax({	
		type:"POST",
		url:"../api/list.php",
		async:true,
		data:{},
		success:function(str){
			var str = JSON.parse(str);
			var html='';
			console.log(str)
			for (var i =0; i < str.length; i++) {
				 html += `<li class="tzxq">
							<a data-id="${str[i].lid}">
								<img src="${str[i].img}"/>
							</a>
						</li>`;
//				console.log(str[i].id)
			}
			
			
		
			$('#tupian_1f ul').html(html);
			$('#tupian_1f ul li a').click(function(){
				$did = $(this).attr('data-id');
				setCookie('goodid',$did,30,'/');
				window.location.href = 'xiangqing.html';
			})
			
			$len = $('#tupian_1f ul li').size();
			for ($i = $len; $i>0; $i-=3) {
//				console.log($i);
				 $('#tupian_1f ul li').eq($i-1).css('margin','0 0 20px 0');
			}
		}
		
	});
	
	
	
	//二层图片数据渲染
	$.ajax({
		type:"post",
		url:"../api/list_f2.php",
		async:true,
		success:function(str){
			
			var str = JSON.parse(str);
//			console.log(str[0].img)
			var html = '';
			for (var i = 0; i < str.length; i++) {
				html += `<li>
								<div class="fb_img">
									<a href="#">
										<img src="../img/${str[i].img}"/>
									</a>
								</div>
								<div class="fb_box">
									<p class="fb_name1">${str[i].content}</p>
									<p class="fb_name2">
										<b class="fuhao">￥</b>
										<b>${str[i].price}</b>
									</p>
								</div>
							</li>`;
			}
			$('#tupian_2f ul').html(html);
			
		}
	});
	
})
