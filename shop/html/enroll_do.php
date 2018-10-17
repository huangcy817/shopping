<?php 
header("content-type:text/html;charset:utf-8");
$conn=mysqli_connect("127.0.0.1","root","","shoping");
mysqli_query($conn,'set names utf8');

$tel = $_POST['tel'];
$pwd = $_POST['pwd'];
$sure = $_POST['surePwd'];

if($pwd != $sure){
	echo "<script>alert('两次密码不一致,请重新核对密码')</script>";
}else{
	$insert = "insert into user(tel,pwd) values('".$tel."','".$pwd."')";
	if(mysqli_query($conn,$insert)){
		echo "<script>alert('注册成功');</script>";
	}else{
		echo "<script>alert('注册失败')</script>";
	}
}

 ?>