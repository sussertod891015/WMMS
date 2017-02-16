'use strict';
import React, {Component} from 'react';
import {Grid, WingBlank} from 'antd-mobile';
import {connect} from 'dva';
import './style.css';

const data = [
	Array.from(new Array(9)).map((_val, i) => ({
		icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
		text: `名字${i}`,
	})),
	Array.from(new Array(3)).map((_val, i) => ({
		icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
		text: `哈哈${i}`,
	}))
];

class SiteShopGrid extends Component {
	render() {
		const currId = this.props.SiteShopBar.currId;
		return (
			<div className="siteShopGrid">
				<WingBlank size="sm">
					<Grid size="lg"
						  data={data[currId]}
						  columnNum={2}
						  onClick={(_el, index) => alert(index)}
						  renderItem={(dataItem, index) => (
							  <div style={{margin: '0.16rem', background: '#f7f7f7', textAlign: 'center'}}>
								  <img src="http://img3.imgtn.bdimg.com/it/u=1395349040,1373069980&fm=214&gp=0.jpg"
									   style={{width: '80%', margin: '0.12rem'}}/>
								  <div style={{background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem'}}>
									  <span>{index + 1}.{dataItem.text}</span>
								  </div>
							  </div>
						  )}
					/>
				</WingBlank>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar
	}
}

export default connect(mapStateToProps)(SiteShopGrid);
