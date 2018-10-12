define(["jquery"],function($){
	function scroll(node,atr,num){
		var timer = null;
		var oBtns = node.find("ol").find("li");
		var oUl = node.find("ul");
		var oLis = oUl.find("li")
		var eq = 0;
		function tab(){
			oBtns.attr("class","");
			oBtns.eq(eq).attr("class","active");
			// 判断传的参数
			switch(atr){
				case "left":
					oUl.animate({left:-num * eq},500,function(){
						if(eq == oBtns.size()){
							oBtns.attr("class","").eq(0).attr("class","active");
							oUl.css(atr,"0px");
							eq = 0;

						}
					})
					break;
				case "top":
					oUl.animate({top:-num * eq},500,function(){
						if(eq == oBtns.size()){
							oBtns.attr("class","").eq(0).attr("class","active");
							oUl.css(atr,"0px");
							eq = 0;

						}
					})
					break;
				case "right":
					oUl.animate({right:-num * eq},500,function(){
						if(eq == oBtns.size()){
							oBtns.attr("class","").eq(0).attr("class","active");
							oUl.css(atr,"0px");
							eq = 0;

						}
					})
					break;
				case "bottom":
					oUl.animate({left:-num * eq},500,function(){
						if(eq == oBtns.size()){
							oBtns.attr("class","").eq(0).attr("class","active");
							oUl.css(atr,"0px");
							eq = 0;

						}
					})
					break;

			}
			
		}

		function time(){
			eq++;
			tab();
		}

		timer = setInterval(time,3000);

		oBtns.click(function(){
			eq= $(this).index();
			tab();
		})

		oUl.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(time,3000);
		})

	}

	return {
		scroll:scroll,
	}
})