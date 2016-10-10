const gulp = require('gulp'),
	  connect = require('gulp-connect'),
	  shell = require('gulp-shell');

const paths = {
	scripts:['public/src/scripts/*.jsx','public/src/scripts/**/*.jsx']
}

gulp.task('start',['build','watch','serve']);

gulp.task('serve',function(){
	connect.server({
		root:'public',
		port:'3000',
		livereload:true,
		fallback:'public/index.html'
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