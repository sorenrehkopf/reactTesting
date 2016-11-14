const gulp = require('gulp'),
	  connect = require('gulp-connect'),
	  shell = require('gulp-shell'),
	  proxy = require('http-proxy-middleware'),
	  sass = require('gulp-sass'),
	  nodemon = require('gulp-nodemon');

const paths = {
	scripts:['public/src/scripts/*.jsx','public/src/scripts/**/*.jsx'],
	styles:['public/src/styles/main.scss','public/src/styles/**/*.scss']
}

gulp.task('start',['build','watch','serve']);
gulp.task('build',['build:scripts','build:styles']);
gulp.task('watch',['watch:scripts','watch:styles']);

gulp.task('serve',function(){
	nodemon({
		script:'index.js',
		ext:'js',
		watch:['controllers/','index.js']
	});
	connect.server({
		root:'public',
		port:'3030',
		livereload:true,
		fallback:'public/index.html',
		middleware:function(connect,opt){
			return [
				proxy('/api',{
					target:'http://localhost:3000',
					changeOrigin:true
				})
			]
		}
	});
});

gulp.task('build:scripts',function(){
	return gulp.src(paths.scripts)
	.pipe(shell([
		'npm run build'
	]))
	.pipe(connect.reload());
});

gulp.task('build:styles',function(){
	return gulp.src(paths.styles[0])
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('public/build/styles'))
		.pipe(connect.reload());
});

gulp.task('watch:scripts',function(){
	gulp.watch(paths.scripts,['build:scripts']);
});

gulp.task('watch:styles',function(){
	gulp.watch(paths.styles,['build:styles']);
});