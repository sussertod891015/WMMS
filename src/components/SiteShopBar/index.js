'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {SegmentedControl, WingBlank} from 'antd-mobile';
import './style.css';

class SiteShopBar extends Component {
	onChange(e) {
		this.props.dispatch({type: 'SiteShopBar/setTabCurrId', tabCurrId: e.nativeEvent.selectedSegmentIndex});
	}

	getTabValue() {
		return this.props.SiteData.GoShoppingData.data.map((value, index)=> {
			return value['tabName']
		});
	}

	render() {
		return (
			<WingBlank size="sm" className="sc-example siteShopBar">
				<SegmentedControl
					selectedIndex={this.props.SiteShopBar.tabCurrId}
					values={this.getTabValue()}
					onChange={(e)=>this.onChange(e)}
				/>
			</WingBlank>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar,
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(SiteShopBar);
