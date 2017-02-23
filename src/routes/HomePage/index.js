'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteTabBar from '../../components/SiteTabBar';
import SiteStartUp from '../../components/SiteStartUp';

class HomePage extends Component {
	render() {
		return (
			<div>
				{
					this.props.SiteHomePage.loadingFinish ?
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
		SiteHomePage: state.SiteHomePage
	}
}

export default connect(mapStateToProps)(HomePage);
