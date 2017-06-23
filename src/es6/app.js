// Components
import Header from './components/header/header';
import Block2 from './components/block2/block2';
import Block3 from './components/block3/block3';
import Block4 from './components/block4/block4';
import Block5 from './components/block5/block5';
import Block6 from './components/block6/block6';


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
				<Block5 />
				<Block6 />
			</main>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
