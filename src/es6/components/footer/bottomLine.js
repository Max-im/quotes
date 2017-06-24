import React from 'react';


const BottomLine = (props) => {
	return (
		<div className="footer__bottomLine">
			<div className="container">
				<div className="footer__bottomLineWrap">
					<small className="footer__copyright">2016 &copy; copyright - Quotes PSD Templates. All right resirved</small>
					<ul className="footer__socList">
						{props.data.map( (item, i) => {
							return(
								<li key={i}>
									<a href="#" className={`footer__socItem footer__${item}`}>{item}</a>						
								</li>						
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}


export default BottomLine;