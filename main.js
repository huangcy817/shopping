console.log('hi');

require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"cookie":"jquery.cookie",
		"parabola":"parabola",
		"index":"index",
	},
	shim:{
		"jquery.cookie":"jquery-1.11.1",
		"parabola":{
			exports:"_"
		}
	}
})

require(["jquery","index"],function($,index){
	index.address();
})