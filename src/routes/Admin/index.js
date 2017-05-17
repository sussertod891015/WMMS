'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteAdmin from '../../components/SiteAdmin';

class Admin extends Component {
	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchAdminData'
		});
	}

	render() {
		return (
			<div>
				<SiteAdmin/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(Admin);

