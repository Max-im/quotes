import React from 'react';


const Generator = (props) => {
	return (
		<div className="footer__wrapper">
			{props.data.map( ( item, i ) => {
				return (
					<div key={i} className="footer__element">
						<h4 className="footer__header">
							{item.header}
						</h4>

						<ul className="footer__list">
							{item.links.map( ( itemL, i ) => {
								return(
									<li key={i} className="footer__listItem">
										<a className="footer__link" href="#">{itemL}</a>
									</li>
								)
							})}
							{item.contacts.map( ( itemP, j ) => {
								return(
									<li key={j} className="footer__listItem">
										{itemP}
									</li>
								)
							})}
						</ul>
					</div>
				)
			})}
			<div className="footer__element">
				<h4 className="footer__header">subscribe now</h4>
				<ul className="footer__list">
					<li className="footer__listItem">
						get our leters news and products updates daily
					</li>
				</ul>
				<form>
					<input className="footer__input" type="mail" placeholder="Email address"/>
					<button className="block__btn block__btn_small">submit</button>
				</form>
			</div>
		</div>
	)

}

export default Generator;
			