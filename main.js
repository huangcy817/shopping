console.log('hi');

require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"cookie":"jquery.cookie",
		"parabola":"parabola",
	},
	shim:{
		"jquery.cookie":"jquery-1.11.1",
		"parabola":{
			exports:"_"
		}
	}
})

require(["jquery","index","scroll","data","json"],function($,index,scroll,data,json){
	// 主页面js代码
	index.address();
	// 滚动窗口
	scroll.scroll($(".banner"),"left",$(document).width());
	scroll.scroll($(".one .bot .left"),"left","400");

	// 处理数据的地方
	json.select();

})