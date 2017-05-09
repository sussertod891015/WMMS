'use strict';
import React, {Component} from 'react';
import {Result, Icon} from 'antd-mobile';
import {HASH_MAP} from '../../utils/config';
import {connect} from 'dva';
import '../../public/startUpIcon/iconfont.css';
import './style.css';

class SiteStartUp extends Component {
	handleClick() {
		// this.props.dispatch({
		// 	type: 'SiteHomePage/loadingDone',
		// 	loadingFinish: true
		// });
		// this.props.dispatch({
		// 	type: 'SiteHomePage/fetchData'
		// });
	}

	componentWillUnmount() {
		window.location.hash = Object.values(HASH_MAP)[0];
	}

	componentDidMount(){
		this.props.dispatch({
			type: 'SiteHomePage/fetchData'
		});
	}

	render() {
		return (
			<div className="start_up_container" onClick={()=>this.handleClick()}>
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
		SiteHomePage: state.SiteHomePage
	}
}

export default connect(mapStateToProps)(SiteStartUp);
