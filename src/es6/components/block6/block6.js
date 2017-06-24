import React from 'react';
import Masonry from 'masonry-layout';
import Block6Generator from './block6Generator';
// require('masonry-layout');

class Block6 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			posters:[
				{
					img: "poster1",
					author: " ",
					text: "Stay true, stay gentelman"
				},
				{
					img: "poster2",
					author: "Thomas Cambala",
					text: "all muse of nature with a poets eyes"
				},
				{
					img: "poster3",
					author: " ",
					text: "make work fun and play"
				},
				{
					img: "poster4",
					author: " ",
					text: "silence is golden"
				}
			]
		}
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	onClickHandler(e){
		e.preventDefault();
	}
	componentDidMount(){
		setTimeout(()=>{
			const grid = document.querySelector('.block6__posters');
			const msnry = new Masonry( grid, {
			  itemSelector: '.block6__item',
			  columnWidth: 100
			});
		}, 50)
	}
	render(){
		return(
			<div className="block6">
				<div className="container">
					<h3 className="block6__header">Buy poster prints</h3>
					<Block6Generator onClickHandler={this.onClickHandler} data={this.state.posters} />
				</div>
			</div>
		);
	}

}

export default Block6;