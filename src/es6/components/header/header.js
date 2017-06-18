import React from 'react';
import TopLine from './topLine';
import Slider from './carousel';
import Menu from './menu';
import HeaderH1 from './headerH1';


class Header extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			menuProp :['home', 'about us', 'categories', 'gallery', 'events', 'blog', 'contact us'],
			carousel :['carousel1.jpg', 'carousel2.jpg', 'carousel3.jpg', 'carousel4.jpg', 'carousel5.jpg']
		}
		this.onCloseMenu = this.onCloseMenu.bind(this);
		this.onShowMenu = this.onShowMenu.bind(this);
		this.onMenuChoise = this.onMenuChoise.bind(this);

	}
	onCloseMenu(){
		document.querySelector('.header__nav').classList.add('menuHide');
	}

	onShowMenu(){
		document.querySelector('.header__nav').classList.remove('menuHide');
	}

	onMenuChoise(e){
		const target = e.target;
		if(!target.matches('a'))return;
		e.preventDefault();
		console.log(target.text);
		this.onCloseMenu();
	}

	render(){
		return (
			<header className="header">
				<Slider data={this.state.carousel}/>
				<div className="container">	
					<TopLine onShowMenu={this.onShowMenu} />
					<HeaderH1 />
				</div>
				<Menu data={this.state.menuProp} onMenuChoise={this.onMenuChoise} onCloseMenu={this.onCloseMenu} />
			</header>
		);
	}
}



export default Header;