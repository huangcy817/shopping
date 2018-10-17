define(["jquery"],function($){
	function login(){
		// 点击注册出现注册页面
		$("#changeEnroll").click(function(){
			$("#login").css("display","none");
			$("#enroll").css("display","block");
			$("#enrollCode").text(randomCode(4));
		})

		// 点击登录出现登录页面
		$("#changeLogin").click(function(){
			$("#login").css("display","block");
			$("#enroll").css("display","none");
			$("#code").text(randomCode(4));

		})

		$("#getCode").click(function(){
			return false;
		})

		$("#code").text(randomCode(4));

		// 登录看不清换一张
		$("#newCode").click(function(){
			$("#code").text(randomCode(4));
		})

		// 注册 看不清换一张
		$("#codeNew").click(function(){
			$("#enrollCode").text(randomCode(4));
		})
		// 登录验证码验证
		$("#codeInput").blur(function(){
			if($("#codeInput").val().toLowerCase() == code.toLowerCase()){
				$("#warning").text("验证码正确√");
			}else{
				$("#warning").html(`<font color = "red">验证码错误请重新输入</font>`);
				$("#code").text(randomCode(4));
			}
		})

		// 注册 验证码验证
		$("#inputCode").blur(function(){
			if($("#inputCode").val().toLowerCase() == code.toLowerCase()){
				$("#warn").text("验证码正确√");
			}else{
				$("#warn").html(`<font color = "red">验证码错误请重新输入</font>`);
				$("#enrollCode").text(randomCode(4));
			}
		})

	}
var code = null;
	function randomCode(n){
		var arr = [];
		for(var i = 0; i < n; i++ ){
			var num = parseInt(Math.random()*100);
			if(num >= 0 && num <= 9){
				arr[i] = num;
			}else if(num >= 65 && num <= 90){
				arr[i] = String.fromCharCode(num);
			}else if(num >= 17 && num <= 42){
				arr[i] = String.fromCharCode(num+80);
			}else{
				i--;
			}
		}
		code = arr.join("")
		return code;
	}

	return {
		login:login
	}
})