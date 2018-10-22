define(["jquery","cookie"],function($){
	function shopList(){
		// 划出类别出现类别区域
		$("#allClass,#allDiv").mouseenter(function(){
			$("#allDiv").css("display","block");
		})
		$("#allClass,#allDiv").mouseleave(function(){
			$("#allDiv").css("display","none");
		})

		$("#electron,#elecDiv").mouseenter(function(){
			$("#elecDiv").css("display","block");
		})
		$("#electron,#elecDiv").mouseleave(function(){
			$("#elecDiv").css("display","none");
		})

		$("#phone,#phoneDiv").mouseenter(function(){
			$("#phoneDiv").css("display","block");
		})
		$("#phone,#phoneDiv").mouseleave(function(){
			$("#phoneDiv").css("display","none");
		})

		// 请求主要内容数据
		$.ajax({
			url:"../data/shopList.json",
			type:"GET",
			success:function(data){
				$("#count").text(data.length);
				var html = " ";
				for(var i = 0; i < data.length; i++){
					html += `<li>
								<img src="${data[i].img}" alt="">
								<b>${data[i].title}</b>
								<i>赠</i><span>${data[i].gift}</span>
								<s>${data[i].price}</s>
								<a href = "shopDetails.html">立即订购</a>
								<p>加入购物车</p>
								<input type="hidden" value = "${data[i].id}"/>
							</li>`;
				}
				$("#contUl").html(html);
			},
			error:function(msg){
				alert(msg);
			}
		})

		// 清除记录
		$("#clear").click(function(){
			$("#clears").html(" ");
		})

		// 加入购物车

		$("#contUl").on("click","li p",function(){
			// 弹出框
			var left = $(window).width()/2 - $("#shopcar").width()/2;
			var top = $(window).height()/2 - $("#shopcar").height()*2 + $(document).scrollTop();
			$("#shopcar").css({
				display:"block",
				left:left,
				top:top
			});

			var first = $.cookie("shop") == null ? true : false;
			if(first){
				$.cookie("shop",`[{id:$(this).parent().children("input").val(),num:1}]`,{expires:7,raw:true,path:"/"});
			}else{
				// 判断之前是否添加过该商品
				var cookieStr = eval($.cookie("shop"));
				var isSame = false;
				for(var i = 0; i < cookieStr.length; i++){
					if(cookieStr[i].id == $(this).parent().children("input").val()){
						cookieStr[i].num++;
						isSame = true;
						break;
					}
				}
				if(!isSame){
					var obj = {id:$(this).parent().children("input").val(),num:1};
					cookieStr.push(obj);
				}
				$.cookie("shop",JSON.stringify(cookieStr),{expires:7,raw:true,path:"/"});

			}
		})


	}

	return {
		shopList:shopList,
	}
})