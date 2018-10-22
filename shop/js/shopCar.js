define(["jquery"],function($){
	function shopCar(){

		//隔行变色效果 
		var tr = $("table").find("tr");
		for(var i = 0; i < tr.length;i++){
			if(i % 2 == 0){
				tr.eq(i).css("background","#f5f5f5");
			}
		}

		// 减法运算
		$("table").on("click",".reduce",function(){
			num = Number($(this).parent().children('.buyNum').val());
			if(num == 1){
				num = 1;
			}else{
				$(this).parent().children('.buyNum').val(num-1);
			}

			var price = Number($(this).parent().parent().children('.price').children('i').text());
			var sum = product(price,$(this).parent().children('.buyNum').val());
			$(this).parent().parent().children('.sum').text("￥" + sum + ".00");
		})

		// 加法运算
		$("table").on("click",".add",function(){
			num = Number($(this).parent().children('.buyNum').val());
			$(this).parent().children('.buyNum').val(num+1);

			var price = Number($(this).parent().parent().children('.price').children('i').text());
			var sum = product(price,$(this).parent().children('.buyNum').val());
			$(this).parent().parent().children('.sum').text("￥" + sum + ".00");
		})

		// 小计方法
		function product(price,num){
			return price * num;
		}

		
		// 购物车数据
		var cookie = eval($.cookie("shop"));
		$.ajax({
			url:"../data/shopList.json",
			type:"GET",
			success:function(data){
				for(var i = 0; i < data.length; i++){
					for(var j = 0; j < cookie.length; j++){
						if(data[i].id == cookie[j].id){
							var sum = "￥" + Number(data[i].price)*cookie[j].num + ".00";
							$("table").append(`<tr>
						<td><input type = "checkbox" class = "inputBox"><img src="${data[i].img}" alt=""></td>
						<td><a href="#">${data[i].title}</a></td>
						<td>${data[i].shopNum}</td>
						<td class = "price">¥<i>${data[i].price}</i></td>
						<td>有库存</td>
						<td>否</td>
						<td><button class = "reduce">-</button><input type="text" value = "${cookie[j].num}" class = "buyNum">	<button class = "add">+</button></td>
						<td class = "sum">${sum}</td>
						<td><a href="#">收藏</a><a href="#">删除</a></td>
					</tr>`);
						}
					}
				}
			},
			error:function(msg){
				console.log(msg);
			}
		})

	}

	// 购物车数字
		function shopCarNum(){
			var cookie = $.cookie("shop");
			if(cookie){	
				cookie = eval(cookie);
				var num = 0;
				for(var i = 0; i < cookie.length; i++){
					num += cookie[i].num;
				}
				$("#carNum").text(num);
				return num;
			}

		}

	return {
		shopCar:shopCar,
		carNum:shopCarNum,
	}
})