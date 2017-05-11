'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteProfile from '../../components/SiteProfile';

class Profile extends Component {
	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchProfileData'
		});
	}

	render() {
		return (
			<div>
				<SiteProfile/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(Profile);

