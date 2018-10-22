$('.xxk-xxk .xx-u1 li').mouseover(function(){
//	console.log($(this).index());
	$('.xxk-xxk .xx-u2').css('display','none');
	$('.xxk-xxk .xx-u2').eq($(this).index()).css('display','block');
	
	if($(this).index() == 0){
		$(this).css('background','#FFFFFF');
		$('.xxk-xxk .xx-u1 li').eq(1).css('background-color','#f4f4f4');
	}
	if($(this).index() == 1){
		$(this).css('background','#FFFFFF');
		$('.xxk-xxk .xx-u1 li').eq(0).css('background-color','#f4f4f4');
	}
	
})