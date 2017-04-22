'use strict';

const gulp = require('gulp');


function lazyRequireTask(taskName, path, options){
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback){
		let task = require(path).call(this, options);

		return task(callback);
	})
}



// CSS
// =======================================================================
lazyRequireTask('sass', './tasks/sass', { src: 'src/sass/media.scss' });




// JavaScript
// =======================================================================
lazyRequireTask('js', './tasks/js', { src: './src/es6/app.js' });




// browser-sync
// =======================================================================
lazyRequireTask('browser-sync', './tasks/browsercync');





// spritesmith
// =======================================================================
lazyRequireTask('sprite', './tasks/sprite', { src: 'src/img/_sprite/*.png' });



// =======================================================================
// W A T C H
// =======================================================================
gulp.task('watch', ['browser-sync', 'sass', 'js', 'sprite' ], function() {
	gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/es6/**/*.js', ['js', browserSync.reload]);
});



//========================================================================
// - P-R-O-D-U-C-T-I-O-N -
//========================================================================



// clean
// =======================================================================
lazyRequireTask('clean', './tasks/clean' );



// img optimisation
// =======================================================================
lazyRequireTask('img', './tasks/img', { src: 'src/img/**/*' });




// clear cache
// =======================================================================
lazyRequireTask('clear', './tasks/clear');





// B U I L D
// =======================================================================

gulp.task('build', ['clean', 'img', 'sass' ,'js'], function() {

	// FONTS
	let buildFonts = gulp.src('src/fonts/**/*') 
	.pipe(gulp.dest('dist/fonts'))

	// CSS
	let buildCss = gulp.src([ 'src/css/**/*.css'])
	.pipe(gulp.dest('dist/css'))

	// JavaScript
	let buildJs = gulp.src('src/js/**/*.js')
	.pipe(gulp.dest('dist/js'))

	// HTML
	let buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));

	// JSON
	let buildJSON = gulp.src('src/json/**/*.json')
	.pipe(uglify())
	.pipe(gulp.dest('dist/json'));

});




gulp.task('default', ['watch']);