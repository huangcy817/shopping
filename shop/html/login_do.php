<?php 
header("content-type:text/html;charset:utf-8");
$conn=mysqli_connect("127.0.0.1","root","","shoping");
mysqli_query($conn,'set names utf8');

$tel = $_POST['tel'];
$pwd = $_POST['pwd'];

$sel = "select * from user";
$res = mysqli_query($conn,$sel);
$flag = 0;
while($row = mysqli_fetch_array($res)){
	if($tel == $row['tel'] && $pwd == $row['pwd']){
		$flag = 1;
		break;
	}
}
if($flag){
	echo '<script>alert("登录成功");history.back();</script>';
}else{
	echo '<script>alert("用户名或密码错误，请重新登录");history.back();</script>';
}
 

 ?>