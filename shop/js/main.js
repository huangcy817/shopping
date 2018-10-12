console.log('hi');

require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"cookie":"jquery.cookie",
		"parabola":"parabola",
		"index":"index",
		"scroll":"scroll"
	},
	shim:{
		"jquery.cookie":"jquery-1.11.1",
		"parabola":{
			exports:"_"
		}
	}
})

require(["jquery","index","scroll"],function($,index,scroll){
	index.address();
	scroll.scroll($(".banner"),"left",$(document).width());
	scroll.scroll($(".one .bot .left"),"left","400");

})