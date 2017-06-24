import React from 'react';
import Generator from './generator';
import BottomLine from './bottomLine';


class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					header: "browse",
					links: [
						"home",
						"about us",
						"categories",
						"info",
						"servise"
					],
					contacts:[]
				},
				{
					header: "shop",
					links: [
						"accound",
						"help & quide",
						"Shipping & Returns",
						"FAQs"
					],
					contacts:[]
				},
				{
					header: "contact",
					links:[],
					contacts: [
						"Quotes PSD template Some str, 123456 Villa Vanilla, My State, My Country 987456123",
						"phone: +99-999-99-99",
						"fax: +99-999-99-99",
						"mail: excample@gmail.com"
					]
				}
			],
			social: [ 
				"svg__facebook",
			 	"svg__google-plus",
			 	 "svg__instagram", 
			 	 "svg__linkedin", 
			 	 "svg__mail", 
			 	 "svg__pinterest", 
			 	 "svg__twitter", 
			 	 "svg__youtube" 
			]
		}
	}
	render(){
		return (
			<footer className="footer">
				<div className="container">
					<Generator  data={this.state.data} />
				</div>
				<BottomLine data={this.state.social}/>
			</footer>
		)
	}
}


export default Footer;