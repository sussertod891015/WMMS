'use strict';
import React, {Component} from 'react';
import {Grid} from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
	icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
	text: `名字${i}`,
}));

const data_0 = Array.from(new Array(9)).map((_val, i) => ({
	icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
	text: `哈哈${i}`,
}));

class SiteShopGrid extends Component {
	render() {
		return (
			<div>
				<Grid data={data} columnNum={2} onClick={(_el, index) => alert(index)}/>
			</div>
		);
	}
}

export default SiteShopGrid;
