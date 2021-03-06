'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {TAB_BAR} from '../../utils/config';
import SiteTabBar from '../../components/SiteTabBar';
import SiteStartUp from '../../components/SiteStartUp';

class HomePage extends Component {
	componentWillMount() {
		if (!this.props.SiteData.ProfileData.data.isAdmin) {
			TAB_BAR.pop();
		}
	}

	render() {
		return (
			<div>
				{
					this.props.SiteData.firstLoadingFinish ?
						<SiteTabBar pageContent={this.props.children}/>
						:
						<SiteStartUp/>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(HomePage);
