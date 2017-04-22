'use strict';


const gulp 			= require('gulp');
const browserSync 	= require('browser-sync');


module.exports = function(options){
	
	return function(){

		browserSync({
			server: {
				baseDir: 'src'
			}
			// , notify: false // Disable notifications
		});

	}
};