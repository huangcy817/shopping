define(["jquery"],function($){
	function address(){
		// 鼠标划过地址块出来
		$("#address").mouseenter(function(){
			$("#throughAddress").css("display","block");
		})
		$("#throughAddress").mouseenter(function(){
			$("#throughAddress").css("display","block");
		})
		// 鼠标划出地址块消失
		$("#address").mouseleave(function(){
			$("#throughAddress").css("display","none");
		})
		$("#throughAddress").mouseleave(function(){
			$("#throughAddress").css("display","none");
		})

		// 点击关闭关闭地址块
		$("#x").click(function(){
			$("#throughAddress").css("display","none");
		})

		// 鼠标经过地址选项卡变换下边地址
		$("#olAdd").find("li").mouseover(function(){
			$("#olAdd").find("li").attr("class","");
			$(this).attr("class","active");
			$("#throughAddress").find("ul").css("display","none").eq($(this).index()).css("display","block");
		})

		// 选择地址
		$("#throughAddress").find("ul").find("li").click(function(){
			$("#olAdd").find("li").eq($(this).parent().index()-3).text($(this).text()).attr("class","");
			$("#olAdd").find("li").eq($(this).parent().index()-2).text("请选择").attr("class","active");
			$("#throughAddress").find("ul").css("display","none").eq($(this).parent().index()-2).css("display","block");
			if(($(this).parent().index()-3) == 2){
				$("#address").text($("#olAdd").text());
				$("#ul1").css("display","block");
				$("#province").attr("class","active");
				$("#throughAddress").css("display","none");

			}
		})


		// 我的风尚区域
		$("#myf,#my").mouseenter(function(){
			$("#my").css("display","block");
			$("#myf a").addClass('active');
		})
		$("#myf,#my").mouseleave(function(){
			$("#my").css("display","none");
			$("#myf a").removeClass('active');
		})

		$("#service").mouseover(function(){
			$("#service a").addClass('active');
		}).mouseout(function(){
			$("#service a").removeClass('active');
		})

		// 搜索框部分
		$("#input").blur(function(){
			$("#input").attr("placeholder","请输入商品关键词或者货号");
		}).focus(function(){
			$("#input").attr("placeholder","");
		})

		// 二维码
		$("#weChat,#twoCode").mouseenter(function(){
			$("#twoCode").css("display","block");
		})
		$("#weChat,#twoCode").mouseleave(function(){
			$("#twoCode").css("display","none");
		})


	}

	return {
		address:address,
	}
})