console.log('hi');

require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"cookie":"jquery.cookie",
		"parabola":"parabola",

	},
	shim:{
		"cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["jquery","index","scroll","data","json","cookie"],function($,index,scroll,data,json){
	// 主页面js代码
	index.address();
	// 滚动窗口
	scroll.scroll($(".banner"),"left",$(document).width());
	scroll.scroll($(".one .bot .left"),"left","400");

	// 处理数据的js
	json.select();
	json.one();
	json.same();

})