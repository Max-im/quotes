const header 	= require('./header.es6.js');
const main		= require('./main.es6.js');


// jQuery
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

// owl-carousel
// require('../../node_modules/owlcarousel/owl-carousel/owl.carousel.min.js');


// React
const React 	= require('react');
const ReactDOM 	= require('react-dom');



main(React, ReactDOM, React.Component);

header(jQuery);