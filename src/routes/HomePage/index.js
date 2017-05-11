'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteTabBar from '../../components/SiteTabBar';
import SiteStartUp from '../../components/SiteStartUp';

class HomePage extends Component {
	render() {
		return (
			<div>
				{/*{*/}
					{/*this.props.SiteData.loadingFinish ?*/}
						<SiteTabBar pageContent={this.props.children}/>
						{/*:*/}
						{/*<SiteStartUp/>*/}
				{/*}*/}
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
