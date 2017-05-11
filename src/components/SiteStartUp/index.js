'use strict';
import React, {Component} from 'react';
import {Result, Icon, Toast} from 'antd-mobile';
import {HASH_MAP} from '../../utils/config';
import {connect} from 'dva';
import '../../public/startUpIcon/iconfont.css';
import './style.css';

class SiteStartUp extends Component {
	componentWillUnmount() {
		window.location.hash = Object.values(HASH_MAP)[0];
	}

	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchMeetingContentData'
		});
	}

	render() {
		return (
			<div className="start_up_container">
				<Result
					img={<i className="iconfont">&#xe614;</i>}
					title="WMMS"
					message="Copyright © 2017 Sussertod. All rights reserved."
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteHomePage: state.SiteHomePage,
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteStartUp);
