// Components
import Header from './components/header/header';
import Block2 from './components/block2/block2';
import Block3 from './components/block3/block3';
import Block4 from './components/block4/block4';


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
				<Block3 />
				<Block4 />
			</main>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
