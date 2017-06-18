// Components
import Header from './components/header/header';
import Main from './components/main/main.js';


// React
import React from 'react';
import ReactDOM from 'react-dom';


// jQuery
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;




function App(){
	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
