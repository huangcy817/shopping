console.log('otherMain');

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

require(["jquery","other","scroll","data","json","cookie","shopList","shopDetails"],function($,other,scroll,data,json,cookie,shopList,shopDetails){
	// 其他页面js代码
	other.other();
	shopList.shopList();
	// 滚动窗口

	// 处理数据的js
	json.select();

	// 商品详情页js
	shopDetails.details();

})