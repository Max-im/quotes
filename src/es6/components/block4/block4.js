import React from 'react';
import Reasons from './reasons';


class Block4 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					header: "you are alife",
					author: "some name",
					cls: "block4__item block4__item_left ",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				},
				{
					header: "someone loves you",
					author: "some name",
					cls: "block4__item block4__item_right ",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				},
				{
					header: "enjoy the moment",
					author: "some name",
					cls: "block4__item block4__item_left ",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				},
				{
					header: "health is wealth",
					author: "some name",
					cls: "block4__item block4__item_right ",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				},
				{
					header: "addition block1",
					author: "some name",
					cls: "block4__item block4__item_left block4__item_addition",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				},
				{
					header: "addition block2",
					author: "some name",
					cls: "block4__item block4__item_right block4__item_addition",
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam assumenda quibusdam cumque quo magnam voluptates, velit voluptatum numquam atque reprehenderit est illum provident, nisi eos. Hic vel explicabo eius."
				}
			]
		}
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	componentDidMount(){
		const imgAll = document.querySelectorAll('.block4__item');
		
		checkScroll()
		function checkScroll(e){
			Array.from(imgAll, elem => {
				const slideInAt = (window.scrollY + window.innerHeight) - elem.offsetWidth /2;
				const imgBottom = elem.offsetTop + elem.offsetHeight;

				const isHalfShown = slideInAt > elem.offsetTop;
				const isNoScrollPast = window.scrollY < imgBottom;

				if(isHalfShown && isNoScrollPast){
					elem.classList.add('block4__item_active');
				}else{
					elem.classList.remove('block4__item_active');
				}

			})

		}

		window.addEventListener('scroll', checkScroll);
	}

	onClickHandler(e){
		e.preventDefault();
	}

	render(){
	return(
		<div className="block4">
			<div className="container">
				<div className="block4__wrap">
					<h3 className="block4__header">
						Reasons to be happy
					</h3>
					<Reasons data={this.state.data} onClickHandler={this.onClickHandler}/>
					
				</div>
			</div>
		</div>
	)
	}
}

export default Block4;