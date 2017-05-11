'use strict';
import React, {Component} from 'react';
import {Grid, WingBlank, Modal, Card} from 'antd-mobile';
import SiteShopModal from '../SiteShopModal';
import {connect} from 'dva';
import './style.css';

class SiteShopGrid extends Component {
	showModal(_el, index) {
		this.props.dispatch({
			type: 'SiteShopBar/toggleModal',
			shopCurrId: index,
			modalVisible: true
		});
	}

	getData() {
		const tabCurrId = this.props.SiteShopBar.tabCurrId;
		return this.props.SiteData.GoShoppingData.data.map((data, index)=> {
			return data['tabData'];
		})[tabCurrId];
	}

	render() {
		return (
			<div className="siteShopGrid">
				<WingBlank size="sm">
					<Grid size="lg"
						  data={this.getData()}
						  columnNum={2}
						  onClick={(_el, index) => this.showModal(_el, index)}
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
				<SiteShopModal/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar,
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteShopGrid);
