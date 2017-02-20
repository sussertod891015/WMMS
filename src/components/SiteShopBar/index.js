'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {SegmentedControl, WingBlank} from 'antd-mobile';
import './style.css';

const SHOP_DATA = {
	YOGHOURT: '酸奶',
	ICECREAM: '冰淇淋'
};

class SiteShopBar extends Component {
	onChange(e) {
		this.props.dispatch({type: 'SiteShopBar/setTabCurrId', tabCurrId: e.nativeEvent.selectedSegmentIndex});
	}

	render() {
		return (
			<WingBlank size="sm" className="sc-example siteShopBar">
				<SegmentedControl
					selectedIndex={this.props.SiteShopBar.tabCurrId}
					values={Object.values(SHOP_DATA)}
					onChange={(e)=>this.onChange(e)}
				/>
			</WingBlank>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar
	};
}

export default connect(mapStateToProps)(SiteShopBar);
