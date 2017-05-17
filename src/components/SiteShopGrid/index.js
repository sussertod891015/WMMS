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
			shopCurrId: _el.id,
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
		const {currShopId, defaultShopId} = this.props.SiteData.GoShoppingData;
		const {tabCurrId} = this.props.SiteShopBar;
		const __shopId = currShopId.length === 0 ? defaultShopId : currShopId;
		return (
			<div className="siteShopGrid">
				<Grid size="lg"
					  data={this.getData()}
					  columnNum={2}
					  onClick={(_el, index) => this.showModal(_el, index)}
					  renderItem={(dataItem, index) => (
						  <div style={{
							  margin: '0.16rem',
							  background: '#f7f7f7',
							  textAlign: 'center',
							  boxShadow: tabCurrId === __shopId[0] && dataItem.id === __shopId[1] ? '0 0 .2rem rgba(0,0,0,.7)' : ''
						  }}>
							  <img src={dataItem.icon}
								   style={{width: '80%', margin: '0.12rem'}}/>
							  <div style={{background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem'}}>
								  <span>id:{dataItem.id} {dataItem.text}</span>
							  </div>
						  </div>
					  )}
				/>
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
