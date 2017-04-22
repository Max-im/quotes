'use strict';


const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const browserSync 	= require('browser-sync');
const concat 		= require('gulp-concat');
const cssnano 		= require('gulp-cssnano');
const rename 		= require('gulp-rename');
const uncss 		= require('gulp-uncss');
const debug 		= require('gulp-debug');
const sourcemaps	= require('gulp-sourcemaps');
const multipipe		= require('multipipe');
const notify		= require('gulp-notify');
const autoprefixer 	= require('gulp-autoprefixer'); 


module.exports = function(options){
	
	return function(){

		return multipipe(
			gulp.src(options.src),
			sourcemaps.init(),	
			sass(),
			uncss({
		        html: ['src/index.html']
		    }),
			autoprefixer([
				'Android 2.3',
	  			'Android >= 4',
	  			'Chrome >= 20',
	  			'Firefox >= 24',
	  			'Explorer >= 8',
	  			'iOS >= 6',
	  			'Opera >= 12',
	  			'Safari >= 6'], { cascade: true }),
			cssnano(),
			rename('style.min.css'),
			sourcemaps.write(),
			gulp.dest('src/css'),
			browserSync.reload({stream: true})
		).on('error', notify.onError());

	}
};

