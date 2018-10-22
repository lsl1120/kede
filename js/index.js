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
	
	//1f轮播图
	var index = 0;
    //图片总个数
    var imgnum = $('.f1_left_top ul li').length;
    var nmun='';
    //计算单个图片的宽度
    var imgwidth = $('.f1_left_top ul li').width(); 
    //计算所有左浮动图片的宽度
    var allimgwidth = imgwidth*imgnum; 
    //设置ul宽度 
    $('.f1_left_top ul').css('width',allimgwidth); 
    
    
    $('.f1_left_top').hover(function(){
            //鼠标移动上来停止轮播
        clearInterval(p);
        //显示两边切换按钮
        $('.f1_left_top .u').fadeIn();
    },function(){
            //鼠标移开继续轮播
        pic();
        //隐藏两边按钮
        $('.f1_left_top .u').fadeOut();
    });
    
    //轮播切换图片的函数，
    //思路就是通过定时器不停的改变index的值，
    //然后乘以宽度就是总宽度
    function pic(){
        
        p=setInterval(function(){
            index++; 
            
            if(index>=imgnum){
                index=0;
            }
            //选择对应的图片
            selectimg(index); 
    
        },3000);
        
    }
    
    function selectimg(index){
            //通过改变ul往左边的距离显示对应的图片
        $('.f1_left_top ul').animate({'margin-left':'-' + imgwidth*index + 'px'},600);  
        //切换图片并选择对应按钮
        $('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
    }
    
    //点击左边的按钮选择对应的图片，往左切换图
    $('.f1_left_top .left').click(function(){
        index-=1; 
        if(index<0){
           index=imgnum-1;
        }
        selectimg(index);
    });
    
    //点击左边的按钮选择对应的图片，往右切换图
    $('.f1_left_top .right').click(function(){
        index+=1;
        if(index>imgnum-1){
           index=0;
        }
       selectimg(index);
        
    });
    
    //根据图片个数写入对应按钮的个数
    for(var ni=0;ni<imgnum;ni++){
        nmun +="<a href='javascript:;'></a>";
    }
    $('.f1_left_top .con').html(nmun);
    $('.f1_left_top .con a').eq(0).addClass('active');
    
    //点击圆点选择对应的图片
    $('.con a').each(function(i){
		$(this).click(function(){
		    index=i;
		    $('.f1_left_top ul').animate({'margin-left':'-' + imgwidth*i + 'px'},600);
		    $('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
		});
	});    
    
    //默认开始执行
    pic();
    
    //楼层广告数据渲染
    $.ajax({
    	type:"post",
    	url:"api/lcgg1.php",
    	async:true,
    	data:{},
    	success:function(str){
    		var str = JSON.parse(str);
//  		console.log(str)
    		var html = '';
    		for (var i = 0; i < str.length;i++) {
    			html += `<li>
							<a href="">
								<img src="img/${str[i].ggimg}"/>
							</a>
						</li>`;
    		}
    		$('#lcgg ul').html(html);
    		
    		$lc1len = $('#lcgg ul li').size();
//  		console.log($lc1len);
			for ($i = $lc1len; $i>0; $i-=4) {
//				console.log($i);
				$('#lcgg ul li').eq($i-1).css('margin-right',0);
			}
    		
    	}
    });
    
    //1楼右边的数据渲染
    $.ajax({
    	type:"post",
    	url:"api/right_item.php",
    	async:true,
    	data:{},
    	success:function(str){
    		var str = JSON.parse(str);
//  		console.log(str);
			var html = '';
			for (var i = 0; i<str.length;i++) {
				html += `<div class="right_item">
						<a href="#">
							<img src="img/${str[i].img}"/>
							<label class="right_item_price">￥${str[i].price}</label>
							<label class="right_item_name">${str[i].name}</label>
							<label class="right_item_sales">${str[i].sales}</label>
						</a>
					</div>`;
			}
			$('.f1_right').html(html);
    	}
    });
    
	
	
})
