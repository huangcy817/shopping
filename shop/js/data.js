define(['jquery','index'],function($){
	function data(){
		$.ajax({
			url:"data/address.json",
			type:"GET",
			success:function(data){
				var province = "";
				for(var i = 0; i < data.length;i++){
					province += `<li><a href="#">${data[i].name}</a></li>`;
				}
				$("#throughAddress #ul1").html(province);
			},
			error:function(msg){
				alert(msg);
			}
		})
	}

	return {
		data:data
	}
})