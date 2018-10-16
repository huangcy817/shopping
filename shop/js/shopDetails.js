define(["jquery"],function($){
	function shopDetails(){
		// 划过图片变换中间图片
		$(".main1 ul").find("li img").mouseover(function(){
			$(".main2 img,#bigImg img").attr("src",$(this).attr("src"));
		})

		// 鼠标经过图片透明框出现
		$(".main2 img,#opacity").mouseenter(function(){
			$("#opacity").css("display","block");
			$("#bigImg").css("display","block");
		})

		$(".main2 img,#opacity").mousemove(function(e){
			// 计算 鼠标经过时透明框的位置
			var x = e.pageX - $(".main2 img").offset().left - $("#opacity").width()/2;
			var y = e.pageY - $(".main2 img").offset().top - $("#opacity").height()/2;
			//判断临界值
			if(x < 0){
				x = 0;
			}else if(x >= ($(".main2 img").width() - $("#opacity").width())){
				x = $(".main2 img").width() - $("#opacity").width();
			}

			if(y < 0){
				y = 0;
			}else if(y >= ($(".main2 img").height() - $("#opacity").height())){
				y = $(".main2 img").height() - $("#opacity").height();
			}
			$("#opacity").css({
					left:x,
					top:y
			});

			// 计算大图比例
			var percentX = x / ($(".main2 img").width() - $("#opacity").width());
			var percentY = y / ($(".main2 img").width() - $("#opacity").width());

			$("#bigImg img").css({
				left:percentX * ($("#bigImg").width() - $("#bigImg img").width()),
				top:percentY * ($("#bigImg").height() - $("#bigImg img").height()),
			})


		})
		$(".main2 img,#opacity").mouseleave(function(){
			$("#opacity").css("display","none");
			$("#bigImg").css("display","none");
		})
	}

	return {
		details:shopDetails,
	}
})