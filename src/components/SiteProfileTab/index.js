'use strict';
import React, {Component} from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';
import {connect} from 'dva';
import {PROFILE_TAB_DATA} from '../../utils/config';
import './style.css';

class SiteProfileTab extends Component {
	callback(e) {
		this.props.dispatch({type: 'SiteProfileTab/setCurrId', currId: e});
	}

	render() {
		return (
			<div>
				<Tabs swipeable={false} defaultActiveKey={`${this.props.SiteProfileTab.currId}`}
					  onChange={(e)=>this.callback(e)}>
					{PROFILE_TAB_DATA.map((content, tabIndex)=> {
						return (
							<Tabs.TabPane tab={Object.values(content)[0]['TAB_NAME']} key={tabIndex}>
								{Object.values(content)[0]['TAB_COMPONENT']}
							</Tabs.TabPane>
						);
					})}
				</Tabs>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteProfileTab: state.SiteProfileTab,
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(SiteProfileTab);
