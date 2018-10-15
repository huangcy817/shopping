const gulp = require("gulp");

// 把首页拷贝到文件中
gulp.task("copyIndex",function(){
	return gulp.src("index.html").pipe(gulp.dest("shop")).pipe(connect.reload());
})

// 拷贝所有的html文件
gulp.task("copyHtml",function(){
	return gulp.src(["*.html","!index.html"]).pipe(gulp.dest("shop/html")).pipe(connect.reload());
})

// 处理图片
gulp.task("copyImg",function(){
	return gulp.src("*.{jpg,png}").pipe(gulp.dest("shop/images")).pipe(connect.reload());
})

// 处理js
const concat = require("gulp-concat");
const uglify = require("gulp-uglify")

// 压缩主js文件
gulp.task("js",function(){
	return gulp.src("main.js")
			.pipe(gulp.dest("shop/js"))
			.pipe(uglify())
			.pipe(rename("main.min.js"))
			.pipe(gulp.dest("shop/js"))
			.pipe(connect.reload());
})

// 压缩其他主文件
gulp.task("otherJs",function(){
	return gulp.src("otherMain.js")
			.pipe(gulp.dest("shop/js"))
			.pipe(uglify())
			.pipe(rename("otherMain.min.js"))
			.pipe(gulp.dest("shop/js"))
			.pipe(connect.reload());
})

// 把所有js文件复制到js文件夹下

gulp.task("copy_js",function(){
	return gulp.src(["*.js","!gulpfile.js"])
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
// 首页css
gulp.task("indexCss",function(){
	return gulp.src("index.scss")
			.pipe(sass())
			.pipe(gulp.dest("shop/css"))
			.pipe(minifyCss())
			.pipe(rename("index.min.css"))
			.pipe(gulp.dest("shop/css"))
			.pipe(connect.reload());
})

// 商品列表商品详情首尾css
gulp.task("sameCss",function(){
	return gulp.src("same.scss")
			.pipe(sass())
			.pipe(gulp.dest("shop/css"))
			.pipe(minifyCss())
			.pipe(rename("same.min.css"))
			.pipe(gulp.dest("shop/css"))
			.pipe(connect.reload());
})

// 商品列表页内容scss
gulp.task("listCont",function(){
	return gulp.src("listCont.scss")
			.pipe(sass())
			.pipe(gulp.dest("shop/css"))
			.pipe(minifyCss())
			.pipe(rename("listCont.min.css"))
			.pipe(gulp.dest("shop/css"))
			.pipe(connect.reload());
})
//商品详情页内容scss 
gulp.task("detailsCont",function(){
	return gulp.src("detailsCont.scss")
			.pipe(sass())
			.pipe(gulp.dest("shop/css"))
			.pipe(minifyCss())
			.pipe(rename("detailsCont.min.css"))
			.pipe(gulp.dest("shop/css"))
			.pipe(connect.reload());
})

//绑定所有事件 
gulp.task("bulid",["copyIndex","copyImg","js","indexCss","copy_js","json","copyHtml","sameCss","otherJs","detailsCont","listCont"],function(){
	console.log('项目创建完成');
});

// 添加监听
gulp.task("watch",function(){
	gulp.watch(["index.html"],["copyIndex"]);
	gulp.watch(["*.{jpg,png}"],["copyImg"]);
	gulp.watch(["main.js"],["js"]);
	gulp.watch(["index.scss"],["indexCss"]);
	gulp.watch(["*.js","!gulpfile.js"],["copy_js"]);
	gulp.watch(["*.json","!package.json"],["json"]);
	gulp.watch(["*.html","!index.html"],["copyHtml"]);
	gulp.watch(["same.scss"],["sameCss"]);
	gulp.watch(["otherMain.js"],["otherJs"]);
	gulp.watch(["listCont.scss"],["listCont"]);
	gulp.watch(["detailsCont.scss"],["detailsCont"]);
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