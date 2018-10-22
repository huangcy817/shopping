define(["jquery","cookie"],function($){
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


		// 点击商品介绍规格参数的切换

		$(".downRight ul").find("li").click(function(){
			$(".downRight ul li").attr("class","");
			$(this).attr("class","active");
			$(".downRight div").css("display","none");
			$(".downRight div").eq($(this).index()).css("display","block");
		})

		// 订单数量的加减
		$("#choose #reduce").click(function(){
			var val = Number($("#choose input").val());
			if(val <= 1){
				val = 1;
			}else{
				val--;
			}
			$("#choose input").val(val);
		})

		$("#choose #add").click(function(){
			var val = Number($("#choose input").val());
			$("#choose input").val(++val);

		})

		// 加入购物车时的弹出框
		$("#car").click(function(){
			// 判断是否第一次添加数据
			var first = $.cookie("shop") == null ? true : false;
			if(first){
				$.cookie("shop",`[{id:${$("#shopId").val()},num:1}]`,{expires:7,raw:true,path:"/"});
			}else{
				// 判断之前是否添加过该商品
				var cookieStr = eval($.cookie("shop"));
				var isSame = false;
				for(var i = 0; i < cookieStr.length; i++){
					if(cookieStr[i].id == $("#shopId").val()){
						cookieStr[i].num += Number($("#choose input").val());
						isSame = true;
						break;
					}
				}
				if(!isSame){
					var obj = {id:$("#shopId").val(),num:1};
					cookieStr.push(obj);
				}
				$.cookie("shop",JSON.stringify(cookieStr),{expires:7,raw:true,path:"/"});

			}

			// 判断弹出框的位置
			var left = $(window).width()/2 - $("#shopcar").width()/2;
			var top = $(window).height()/2 - $("#shopcar").height()/2 + $(document).scrollTop();
			$("#shopcar").css({
				display:"block",
				left:left,
				top:top
			});
		})

		// 关闭购物车弹出框
		$(".close").click(function(){
			$("#shopcar").css("display","none");
		})



	}

	return {
		details:shopDetails,
	}
})