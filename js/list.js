$(function(){
	$('.spfl').mouseover(function(){
		$('.sp').css('display','block');
	});
	
	$('.spfl').mouseout(function(){
		$('.sp').css('display','none');
	});
	
	
	$.ajax({
		type:"POST",
		url:"../api/list.php",
		async:true,
		
		success:function(str){
			console.log(str)
			var str = JSON.parse(str);
			var html='';
			console.log(str[1].img)
			for (var i =0; i < str.length; i++) {
				 html += `<li>
							<a href="#">
								<img src="${str[i].img}"/>
							</a>
						</li>`;
			
			}
		
			$('#tupian_1f ul').html(html);
			
			$len = $('#tupian_1f ul li').size();
			
			//n 
			
			
			for ($i = $len; $i>0; $i-=3) {
//				console.log($i);
				 $('#tupian_1f ul li').eq($i-1).css('margin','0 0 20px 0');
			}
			
		}
		
	});
})
