const gulp = require('gulp'),
	  connect = require('gulp-connect'),
	  shell = require('gulp-shell'),
	  proxy = require('http-proxy-middleware'),
	  nodemon = require('gulp-nodemon');

const paths = {
	scripts:['public/src/scripts/*.jsx','public/src/scripts/**/*.jsx']
}

gulp.task('start',['build','watch','serve']);

gulp.task('serve',function(){
	nodemon({
		script:'index.js',
		ext:'js'
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

gulp.task('build',function(){
	return gulp.src(paths.scripts)
	.pipe(shell([
		'npm run build'
	]))
	.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(paths.scripts,['build']);
})