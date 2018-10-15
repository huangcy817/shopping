define(["jquery"],function($){
	function select(){
		$.ajax({
			url:"../data/select.json",
			type:"GET",
			success:function(data){
				var left = "";
				for(var i = 0; i < data.length; i++){
					left += `<li><i class = "iconfont ${data[i].iconfont}"></i>${data[i].title}<span>></span></li>`;

				}
				$("#select").html(left);

				$("#select").on("mouseenter","li",function(){

					for(var i = 0; i < data.length; i++){
						if($(this).text() == data[i].title + ">"){
							$("#about ul li").html(" ");
							$("#shopList").html(" ");
							$("#about ul #title").text(data[i].title);
							$("#about ul #arrow").text(">");
							for(var j = 0; j < data[i].tag.length; j++){
								$("#about ul").append(`<li><a href="">${data[i].tag[j]}</a></li>`);
							}
							for(var k = 0; k < data[i].about.length; k++){
								$("#shopList").append(`<li>
									<img src="${data[i].about[k].img}" alt="">
									<a href="">${data[i].about[k].name}</a>
									<span>价格:<i> ${data[i].about[k].price}</i></span>
								</li>`);
							}

						}
					}
				})
			},
			error:function(msg){
				alert(msg);
			}
		})
	}

	function oneNoRepeat(){
		$.ajax({
			url:"../data/oneNoRepeat.json",
			type:"GET",
			success:function(data){
				var html = "";
				for(var i = 0; i < data.length; i++){
					html += `<li>
									<img src="${data[i].img}" alt="">
									<a href="#">${data[i].name}</a>
									<span>${data[i].price}</span>
								</li>`;
				}
					$(".one .bot .right ul").html(html);
			},
			error:function(msg){
				alert("error");
			}
		})
	}

	function same(){
		$.ajax({
			url:"../data/same.json",
			type:"GET",
			success:function(data){
				for(var i = 0; i < data.length; i++){

					// 小标签的插入
					var tag = " ";
					var bot = " ";
					var bigImg = " ";
					for(var j = 0; j < data[i].tag.length; j++){
						if(data[i].tag[j].name){
							if(j == 0){
								tag += `<li class = "active">${data[i].tag[j].name}</li>`;
							}else{
								tag += `<li>${data[i].tag[j].name}</li>`;
							}
						}else{
							tag = "";
						}
						var aside = " ";
						bigImg = data[i].tag[j].data.img;

						for(var k = 0; k < data[i].tag[j].data.goods.length; k++){
							aside += `<aside>
							<img src="${data[i].tag[j].data.goods[k].img}" alt="">
							<a href="">${data[i].tag[j].data.goods[k].name}</a>
							<span>${data[i].tag[j].data.goods[k].price}</span>
						</aside>`;
						}
						if(j == 0){
							bot += `<div class="bot" style = "display:block">
						<a href="" id = "bigImg"><img src="${bigImg}" alt=""></a>
						${aside}
					</div>`;
						}else{
							bot += `<div class="bot">
						<a href="" id = "bigImg"><img src="${bigImg}" alt=""></a>
						${aside}
					</div>`;
						}

					}



					// 大标题的插入
					$(".contentin").append(`<div class="same">
					<div class="top">
						<span>${data[i].title}</span>
						<ul>${tag}</ul>
						<div class="line"></div>
					</div>
					${bot}
				</div>`)
					

				}
			},
			error:function(msg){
				alert("error");
			}
		})
	}

	return {
		select:select,
		one:oneNoRepeat,
		same:same,
	}
})