'use strict';
import React, {Component} from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';
import {connect} from 'dva';
import SiteProfileShopHistory from '../SiteProfileShopHistory';
import SiteProfileShopBestLove from '../SiteProfileShopBestLove';
import SiteProfileMyMeetingContent from '../SiteProfileMyMeetingContent';
import './style.css';

const TAB_DATA = [
	{
		SiteProfileShopHistory: {
			tabName: '小食记录',
			tabComponent: <SiteProfileShopHistory/>
		}
	},
	{
		SiteProfileShopBestLove: {
			tabName: '最爱小食',
			tabComponent: <SiteProfileShopBestLove/>
		}
	},
	{
		SiteProfileShopBestLove: {
			tabName: '分享历史',
			tabComponent: <SiteProfileMyMeetingContent/>
		}
	}
];

class SiteProfileTab extends Component {
	callback(e) {
		this.props.dispatch({type: 'SiteProfileTab/setCurrId', currId: e});
	}

	render() {
		return (
			<div>
				<Tabs swipeable={false} defaultActiveKey={`${this.props.SiteProfileTab.currId}`} onChange={(e)=>this.callback(e)}>
					{TAB_DATA.map((content, tabIndex)=> {
						return (
							<Tabs.TabPane tab={Object.values(content)[0]['tabName']} key={tabIndex}>
								{Object.values(content)[0]['tabComponent']}
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
		SiteProfileTab: state.SiteProfileTab
	};
}

export default connect(mapStateToProps)(SiteProfileTab);
