module.exports = function(React, ReactDOM, Component) {
	

	class Elem extends Component{
		render(){
			return (
				<div>
					<h1 className="header">Hello world</h1>
					<p>lorem</p>
				</div>
			)
		}
	}



	ReactDOM.render(
		<Component />, 
		document.getElementById('app')
	);


};