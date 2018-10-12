define(["jquery"],function($){
	function select(){
		$.ajax({
			url:"data/select.json",
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
							$("#about ul #title").text(data[i].title);
							$("#about ul #arrow").text(">");
							for(var j = 0; j < data[i].tag.length; j++){
								$("#about ul").append(`<li><a href="">${data[i].tag[j]}</a></li>`);
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

	return {
		select:select
	}
})