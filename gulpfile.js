const gulp = require("gulp");
const plumber = require("gulp-plumber");

// 把首页拷贝到文件中
gulp.task("copyIndex",function(){
	return gulp.src("index.html").pipe(plumber()).pipe(gulp.dest("shop")).pipe(connect.reload());
})

// 处理图片
gulp.task("copyImg",function(){
	return gulp.src("*.{jpg,png}").pipe(plumber()).pipe(gulp.dest("shop/images")).pipe(connect.reload());
})

// 处理js
const concat = require("gulp-concat");
const uglify = require("gulp-uglify")

// 压缩主js文件
gulp.task("js",function(){
	return gulp.src("main.js")
			.pipe(plumber())
			.pipe(gulp.dest("shop/js"))
			.pipe(uglify())
			.pipe(rename("main.min.js"))
			.pipe(gulp.dest("shop/js"))
			.pipe(connect.reload());
})

// 把所有js文件复制到js文件夹下

gulp.task("copy_js",function(){
	return gulp.src(["*.js","!gulpfile.js"])
			.pipe(plumber())
			.pipe(gulp.dest("shop/js"))
			.pipe(connect.reload());
})

// 处理json数据
gulp.task("json",function(){
	return gulp.src(["*.json","!package.json"])
			.pipe(gulp.dest("shop/data"))
			.pipe(connect.reload());
})

// 处理css
const rename = require("gulp-rename");
const minifyCss = require("gulp-clean-css");
const sass = require("gulp-sass-china");
gulp.task("css",function(){
	return gulp.src("index.scss")
			.pipe(sass())
			.pipe(gulp.dest("shop/css"))
			.pipe(minifyCss())
			.pipe(rename("index.min.css"))
			.pipe(gulp.dest("shop/css"))
			.pipe(plumber())
			.pipe(connect.reload());
})

//绑定所有事件 
gulp.task("bulid",["copyIndex","copyImg","js","css","copy_js","json"],function(){
	console.log('项目创建完成');
});
// 添加监听
gulp.task("watch",function(){
	gulp.watch(["index.html"],["copyIndex"]);
	gulp.watch(["*.{jpg,png}"],["copyImg"]);
	gulp.watch(["main.js"],["js"]);
	gulp.watch(["index.scss"],["css"]);
	gulp.watch(["*.js","!gulpfile.js"],["copy_js"]);
	gulp.watch(["*.json","!package.json"],["json"]);
})

// 启动服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"shop",
		livereload:true
	})
})

// 设置默认启动
gulp.task("default",["server","watch"]);