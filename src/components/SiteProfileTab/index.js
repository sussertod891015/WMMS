'use strict';
import React, {Component} from 'react';
import {Tabs, WhiteSpace} from 'antd-mobile';
import {connect} from 'dva';
import {PROFILE_TAB_DATA} from '../../utils/config';
import SiteProfileShopHistory from '../SiteProfileShopHistory'
import SiteProfileShopBestLove from '../SiteProfileShopBestLove'
import SiteProfileMyMeetingContent from '../SiteProfileMyMeetingContent'
import './style.css';

class SiteProfileTab extends Component {
	callback(e) {
		this.props.dispatch({type: 'SiteProfileTab/setCurrId', currId: e});
	}

	render() {
		const fetchedData = this.props.SiteData.ProfileData.data.tabData;
		return (
			<div>
				<Tabs swipeable={false} defaultActiveKey={`${this.props.SiteProfileTab.currId}`}
					  onChange={(e)=>this.callback(e)}>
					{PROFILE_TAB_DATA.map((content, tabIndex)=> {
						const getTabChild = ()=> {
							if (tabIndex === 0) {
								return <SiteProfileShopHistory data={fetchedData.ProfileShopHistoryData}/>;
							} else if (tabIndex === 1) {
								return <SiteProfileShopBestLove
									data={fetchedData.ProfileShopBestLoveData}/>;
							} else {
								return <SiteProfileMyMeetingContent data={fetchedData.ProfileMyMeetingContentData}/>;
							}
						};
						return (
							<Tabs.TabPane tab={Object.values(content)[0]['TAB_NAME']} key={tabIndex}>
								{getTabChild()}
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
