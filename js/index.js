$(function(){
	
	var goTop = document.getElementsByClassName('pf_right_5');
	
	var cookiename = getCookie('username');
	if(cookiename){
		$('#header .c-left .c-left-r').html('欢迎您：' + cookiename);
	}
	
	function setDisplay() {
		  curTop = document.documentElement.scrollTop || document.body.scrollTop;
		  curHeight = document.documentElement.clientHeight || document.body.clientHeight;
//		  console.log(curTop);
//		  goTop.style.display = curTop > curHeight ? 'block' : 'none';
			if(curTop >= 300){
				$('#pf_left').animate({opacity:1},200);
				$('#pf_right .pf_right_5').animate({opacity:1},200);
			}
			if(curTop < 300){
				$('#pf_left').animate({opacity:0},200);
				$('#pf_right .pf_right_5').animate({opacity:0},200);
			}
		}
	window.onscroll = setDisplay;
	
	//回到顶部事件
	goTop.onclick = function(){
		
		// 只设置opacity不行，往上走的时候，window.onscroll事件会触发，还是到顶部才能隐藏,需要清除onscroll事件
		this.style.opacity = 0;
		 window.onscroll = null;
	   var duration = 500, interval = 10, target = document.documentElement.scrollTop || document.body.scrollTop,
	    step = (target / duration) * interval;
	  	var timer = setInterval(function () {
	    	var curTop = document.documentElement.scrollTop || document.body.scrollTop;
		    if (curTop === 0) {
		      window.clearInterval(timer);
		      window.onscroll = setDisplay; // 回到顶部时，再给window.onscroll重新绑定方法，待下一次执行
		      return;
		    }
		    curTop -= step;
		    document.documentElement.scrollTop = curTop;
		    document.body.scrollTop = curTop;
	  }, interval);
	};
	

	//右侧边栏二维码
	$('#pf_right .pf_right_1').mouseover(function(){
		$('#pf_right .pf_right_weixin').css('display','block');
	})
	
	$('#pf_right .pf_right_1').mouseout(function(){
		$('#pf_right .pf_right_weixin').css('display','none');
	})
	
	//右侧边栏验光师
	$('#pf_right .pf_right_3').mouseover(function(){
		$('#pf_right .pf_right_ygs').css('display','block');
	})
	
	$('#pf_right .pf_right_3').mouseout(function(){
		$('#pf_right .pf_right_ygs').css('display','none');
	})
	
	
	
})
