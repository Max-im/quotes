import React from 'react';


const Menu = ( props) => {
	return (
		<nav className="header__nav menuHide">
			<ul className = "header__menu" onClick={props.onMenuChoise}>
				{props.data.map((item, i) => {
					return (
						<li key={i} className="header__menuItem">
							<a href="#" className="header__menuLink">
								{item}
							</a>
						</li>
					)
				})}
				<span onClick={props.onCloseMenu} className="header__menuClose">x</span>
			</ul>
		</nav>
	);
}



export default Menu;