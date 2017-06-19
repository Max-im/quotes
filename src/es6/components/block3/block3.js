import React from 'react';
const Block3Carousel = require('react-responsive-carousel').Carousel;
import Block3Slider from './block3Carousel';




class Block3 extends React.Component {
	componentDidMount(){
		const imgAll = document.querySelectorAll('.block3__item');
		
		checkScroll()
		function checkScroll(e){
			Array.from(imgAll, elem => {
				const slideInAt = (window.scrollY + window.innerHeight) - elem.offsetWidth /2;
				const imgBottom = elem.offsetTop + elem.offsetHeight;

				const isHalfShown = slideInAt > elem.offsetTop;
				const isNoScrollPast = window.scrollY < imgBottom;

				if(isHalfShown && isNoScrollPast){
					elem.classList.add('block3__item_active');
				}else{
					elem.classList.remove('block3__item_active');
				}

			})

		}

		window.addEventListener('scroll', checkScroll);
	}
	render(){
		return(
			<div className="block3">
				<div className="container">
					<div className="block3__wrap">
						<div className="block3__left block3__item">
							<Block3Slider />
						</div>
						<div className="block3__right block3__item">
							<img className="block3__img" src="./img/block2/block2_quotImg1.jpg" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Block3;