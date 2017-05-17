'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteAdminSetting from '../SiteAdminSetting';
import SiteAdminPeopleList from '../SiteAdminPeopleList';

class SiteAdmin extends Component {
	render() {
		return (
			!this.props.SiteData.AdminData.showAdminAttendance ?
				<SiteAdminSetting/>
				:
				<SiteAdminPeopleList/>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteAdmin);
