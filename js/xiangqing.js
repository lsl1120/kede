$(function(){
	$('.spfl').mouseover(function(){
		$('.sp').css('display','block');
	});
	
	$('.spfl').mouseout(function(){
		$('.sp').css('display','none');
	});
	
	//放大镜
	(function() {
		var ulobj = $(".imglist ul");
		var picimg = $(".imgpart .pic img");
		var objimg = $(".imgpart .bigpic img");
		ulobj.on("mouseenter", "li", function() {
			var imgsrc = $(this).children("img").attr("src");
			$(this).addClass("active").siblings().removeClass("active");
			picimg.attr("src", imgsrc);
			objimg.attr("src", imgsrc)
		});
		var pic = $(".imgpart .pic");
		var magnify = $(".imgpart .pic .magnify");
		var bigpic = $(".imgpart .bigpic");
		var objimg = $(".imgpart .bigpic img");
		pic.mousemove(function(e) {
			magnify.show();
			bigpic.show();
			var pagex = e.pageX;
			var pagey = e.pageY;
			var pictop = pic.offset().top;
			var picleft = pic.offset().left;
			var magnifyw = magnify.width();
			var magnifyh = magnify.height();
			var magnifytop = pagey - pictop - magnifyh / 2;
			var magnifyleft = pagex - picleft - magnifyw / 2;
			var picw = pic.width() - magnifyw;
			var pich = pic.height() - magnifyh;
			magnifytop = magnifytop < 0 ? 0 : magnifytop;
			magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
			magnifytop = magnifytop > pich ? pich : magnifytop;
			magnifyleft = magnifyleft > picw ? picw : magnifyleft;
			magnify.css({
				top: magnifytop,
				left: magnifyleft
			});
			var minl = bigpic.width() - objimg.width();
			var mint = bigpic.height() - objimg.height();
			var objimgl = -magnifyleft * 2;
			var objimgt = -magnifytop * 2;
			objimgl = objimgl < minl ? minl : objimgl;
			objimgt = objimgt < mint ? mint : objimgt;
			objimg.css({
				top: objimgt,
				left: objimgl
			})
		});
		pic.mouseleave(function() {
			magnify.hide();
			bigpic.hide()
		})
	})()
	
	
	//购物数量相加减
//	$('#jia').on(function(){
//		$num = $('#sl').val();
//		
//		$num++;
//		$('#sl').val($num);
//	});
	
	$('.fdj_right_content').on('click','#jia',function(){
		$num = $('#sl').val();		
		$num++;
		$('#sl').val($num);
	})
	
	$('.fdj_right_content').on('click','#jian',function(){
		$num = $('#sl').val();		
		$num--;
		if($num <= 1){
			$num = 1;
		}
		$('#sl').val($num);
	})
	
	var did = getCookie('goodid');
	
	$.ajax({
		type:"post",
		url:"../api/list.php",
		async:true,
		data:{
			'did': did
		},
		success:function(str){
			var html = '';
			str = JSON.parse(str);
			console.log(str)
			for (var i = 0; i < str.length; i++) {
				html += `
						<li class="active">
					        <img src="../img/xiangqing/${str[i].fdj1img}" alt="">
					    </li>
					    <li class="active">
					        <img src="../img/xiangqing/${str[i].fdj2img}" alt="">
					    </li>
					    <li class="active">
					        <img src="../img/xiangqing/${str[i].fdj3img}" alt="">
					    </li>
					    <li class="active">
					        <img src="../img/xiangqing/${str[i].fdj4img}" alt="">
					    </li>
					    <li class="active">
					        <img src="../img/xiangqing/${str[i].fdj5img}" alt="">
					    </li>
					    `;
					    
					    var fdj1img = '../img/xiangqing/' + str[i].fdj1img;
			}
//			console.log(html)
			$('.imglist ul').html(html);
//			console.log(fdj1img)
			$('.pic img').attr('src',fdj1img);
			
			
			
			var html1 = '';
			for(var i = 0; i < str.length; i++){
				html1 += '';
				
			}
		}
	});
})
