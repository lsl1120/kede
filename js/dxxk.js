$('.xb_left .xl').mouseover(function(){
	$('.xb_right .xbr').css('display','none');
	$('.xb_right .xbr').eq($(this).index()).css('display','block');
//	console.log($(this).index())
	if($(this).index() == 0){
		$(this).attr('class','xb_left_top');
		$('.xb_left div').eq(1).attr('class','xb_left_bottom')
	}
	if($(this).index() == 1){
		$('.xb_left div').eq(0).attr('class','xb_left_top1')
		$(this).attr('class','xb_left_bottom1');
	}
	
});