define(["jquery"],function($){
	function address(){
		// 鼠标划过地址块出来
		$("#address,#throughAddress").mouseenter(function(){
			$("#throughAddress").css("display","block");
		})
		// 鼠标划出地址块消失
		$("#address,#throughAddress").mouseleave(function(){
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
			var mid = new Array();
			$("#throughAddress #ul1").on("click","li",function(){
				mid.length = 0;
			})
			$("#throughAddress").find("ul").on("click","li",function(){
				$("#address,#throughAddress").off("mouseleave");
				$("#olAdd").find("li").eq($(this).parent().index()-3).text($(this).text()).attr("class","");
				$("#olAdd").find("li").eq($(this).parent().index()-2).text("请选择").attr("class","active");
				$("#throughAddress").find("ul").css("display","none").eq($(this).parent().index()-2).css("display","block");
				if(($(this).parent().index()-3) == 2){
					$("#address").text($("#olAdd").text());
					$("#ul1").css("display","block");
					$("#province").attr("class","active");
					$("#throughAddress").css("display","none");
					$("#address,#throughAddress").mouseleave(function(){
						$("#throughAddress").css("display","none");
					})
					
				}
				mid.push($(this).text());
				// 地址栏市的数据
				$.ajax({
					url:"data/address.json",
					type:"GET",
					success:function(data){
						var citys = "";
						for(var i = 0; i < data.length; i++){
							for(var j = 0; j < data[i].city.length;j++)
								if(data[i].name == mid[0]){
									citys += `<li><a href="#">${data[i].city[j].name}</a></li>`;
								}
						}
						$("#throughAddress #ul2").html(citys);


					},
					error:function(msg){
						alert(msg);
					}
			})

			// 地址栏区的数据
			$.ajax({
				url:"data/address.json",
				type:"GET",
				success:function(data){
					var areas = "";
					for(var i = 0 ; i < data.length; i++){
						for(var j = 0; j < data[i].city.length; j++){
							for(var k = 0; k < data[i].city[j].area.length; k++){
								if(data[i].city[j].name == mid[1]){
									areas += `<li><a href="#">${data[i].city[j].area[k]}</a></li>`;
								}
							}
						}
					}
					$("#throughAddress #ul3").html(areas);
				}
			})
		})

		// 地址栏省数据
		$.ajax({
			url:"data/address.json",
			type:"GET",
			success:function(data){
				var province = "";
				for(var i = 0; i < data.length;i++){
					province += `<li><a href="#">${data[i].name}</a></li>`;
				}
				$("#throughAddress #ul1").html(province);
			},
			error:function(msg){
				alert(msg);
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

		// 商品下拉列表
		$("#selector,#select").mouseenter(function(){
			$("#select").css("display","block");
		})
		$("#selector,#select").mouseleave(function(){
			$("#select").css("display","none");
		})

		// 下拉列表的详情页
		$("#select,#about").mouseenter(function(){
			$("#about,#select").css("display","block");
		})
		$("#select,#about").mouseleave(function(){
			$("#about,#select").css("display","none");
		})

		// 获得当前页面宽度赋值给banner图设置图片大小
		$(".banner ul li img").css("width",$(document).width());
		// 给banner的ul设置宽度
		$(".banner ul").css("width",$(document).width()*$(".banner ul").find("li").size());

		// 小喇叭后的字向上滚动
		var num = 2;	
		function tab(){
			$("#trumpet").animate({top:-35 * num},500,function(){
				if(num++ == 3){
					$("#trumpet").css("top","-35px");
					num = 2;
				}
			});
		}
		var timer = setInterval(tab,2500);
		$("#trumpet").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(tab,2500);
		})

		// 主要内容的划过出现内容
		$(".contentin").on("mouseover",".same .top ul li",function(){
			$(this).parent().find("li").attr("class","");
			$(this).attr("class","active");
			$(this).parent().parent().parent().find(".bot").css("display","none").eq($(this).index()).css("display","block");
		})

	}

	return {
		address:address,
	}
})