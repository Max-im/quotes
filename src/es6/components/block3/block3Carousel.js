import React from 'react';
const Block3Carousel = require('react-responsive-carousel').Carousel;


const Block3Slider = () => {
	return (
		<Block3Carousel className="block3__slider" axis="horizontal" showThumbs={false} showArrows={false} controlArrows={false} showStatus={false} dynamicHeight emulateTouch>
            <div>
            	<blockquote>
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum illum exercitationem neque ratione quidem facilis ad laudantium quasi maxime.
            	</blockquote>
            	<address className="block3__author">some name</address>
            </div>
            <div>
            	<blockquote>
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum illum exercitationem neque ratione quidem facilis ad laudantium quasi maxime.
            	</blockquote>
            	<address className="block3__author">some name</address>
            </div>
            <div>
            	<blockquote>
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum illum exercitationem neque ratione quidem facilis ad laudantium quasi maxime.
            	</blockquote>
            	<address className="block3__author">some name</address>
            </div>
            <div>
            	<blockquote>
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum illum exercitationem neque ratione quidem facilis ad laudantium quasi maxime.
            	</blockquote>
            	<address className="block3__author">some name</address>
            </div>
            <div>
            	<blockquote>
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum illum exercitationem neque ratione quidem facilis ad laudantium quasi maxime.
            	</blockquote>
            	<address className="block3__author">some name</address>
            </div>
        </Block3Carousel>
	)
}



export default Block3Slider;
