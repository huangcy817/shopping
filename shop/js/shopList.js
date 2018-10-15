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
								<a href="#">${data[i].title}</a>
								<i>赠</i><span>${data[i].gift}</span>
								<s>${data[i].price}</s>
								<b>立即订购</b>
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
	}

	return {
		shopList:shopList,
	}
})