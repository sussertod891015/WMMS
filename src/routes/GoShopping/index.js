'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteShopBar from '../../components/SiteShopBar';
import SiteShopGrid from '../../components/SiteShopGrid';

class GoShopping extends Component {
	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchGoShoppingData'
		});
	}

	render() {
		return (
			<div>
				<SiteShopBar/>
				<SiteShopGrid/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(GoShopping);
