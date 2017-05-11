'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SitePeopleList from '../../components/SitePeopleList';

class MyPartner extends Component {
	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchMyPartnerData'
		});
	}

	render() {
		return (
			<div>
				<SitePeopleList/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(MyPartner);

