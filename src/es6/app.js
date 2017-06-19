// Components
import Header from './components/header/header';
import Block2 from './components/block2/block2';


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
			<main>
			<Block2 />
			</main>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
