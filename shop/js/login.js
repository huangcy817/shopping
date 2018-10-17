define(["jquery"],function($){
	function login(){
		// 点击注册出现注册页面
		$("#changeEnroll").click(function(){
			$("#login").css("display","none");
			$("#enroll").css("display","block");
		})

		// 点击登录出现登录页面
		$("#changeLogin").click(function(){
			$("#login").css("display","block");
			$("#enroll").css("display","none");
		})

		$("#getCode").click(function(){
			return false;
		})

	}

	return {
		login:login
	}
})