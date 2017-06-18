import React from 'react';


class Header extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			menu: ['courses', 'prepare', 'html', 'css', 'js', 'react', 'node', 'projects', 'tests' ],
		}

	}

	render(){
		return (
			<header className="header">
				<div className="container">	
					<p>hello</p>
				</div>
			</header>
		);
	}
}



export default Header;