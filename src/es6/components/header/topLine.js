import React from 'react';



const TopLine = (props) => {

	return (
		<div className="topLine">
			
			<a href="#" className="topLine__logo">quotes</a>
			<p className="topLine__menuBtn" onClick={props.onShowMenu} >menu</p>
			
		</div>
	)
}



export default TopLine;