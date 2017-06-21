import React from 'react';

const Reasons = (props) =>{
	
	return(
		<div className="block4__items">
			{props.data.map((item, i) => {
				return(
					<div className={item.cls} key={i}>
						<h4 className="block4__itemHeader">{item.header}</h4>
						<blockquote className="block4__itemText">{item.text}</blockquote>
						<address className="block4__author">{item.author}</address>
					</div>
				)
			})}
			<a href="#" onClick={props.onClickHandler} className="block__btn">more reasons</a>
		</div>
	)


}


export default Reasons;