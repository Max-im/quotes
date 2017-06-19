import React from 'react';
const Carousel = require('react-responsive-carousel').Carousel;



class Slider extends React.Component{
	constructor(props){
		super(props);

	}

	render(){

		return (
			<Carousel className="header__slider" axis="horizontal" showThumbs={false} showArrows={false} showStatus={false} dynamicHeight emulateTouch>
	            {this.props.data.map((item, i) => {
					return(
						<div key={i}>
							<img src={`./img/carousel/carousel${i+1}.jpg`}/>
						</div>
					)
				})}
            </Carousel>
		)
	}
}



export default Slider;