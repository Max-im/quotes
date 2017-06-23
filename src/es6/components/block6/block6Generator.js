import React from 'react';

const Block6Generator = (props) => {
	return(
		<div>
		<div className = 'block6__posters'>

			{props.data.map((item, i) => {
				return(

					<div key={i} className={`block6__${item.img}Item block6__item`}>
						<img src={`./img/block6/${item.img}.jpg`} className={`block6__${item.img} block6__img`} />
						<blockquote className={`block6__blockquote block6__${item.img}Blockquote`}>
							{item.text}
							<address className={`block6__author block6__${item.img}Author`}>
								{item.author}
							</address>
						</blockquote>
						<div className="block6__links">
							<a href="#" className="block6__link block6__link_buyNow">buy now</a>
							<a href="#" className="block6__link block6__link_share">share</a>
						</div>
					</div>
				)
			})}
		</div>
			<div className="block__btnWrap block6__btnWrap">
				<a href="#" onClick={props.onClickHandler} className="block__btn">browse posters</a>
			</div>
		</div>
	)
}


export default Block6Generator;