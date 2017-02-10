'use strict';
import React, {Component} from 'react';
import {TabBar, Icon} from 'antd-mobile';
import './style.css';

const HASH_MAP = {
	MEETING_CONTENT: '/',
	GO_SHOPPING: 'GoShopping',
	MY_PARTNER: 'MyPartner',
	PROFILE: 'Profile'
};

class SiteTabBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: Object.keys(HASH_MAP)[0],
			hidden: false
		}
	}

	linkTo(hash) {
		window.location.hash = hash;
	}

	render() {
		return (
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#33A3F4"
				barTintColor="white"
				hidden={this.state.hidden}
			>
				<TabBar.Item
					title="会议内容"
					key="会议内容"
					icon={<Icon type="solution"/>}
					selectedIcon={<Icon type="solution"/>}
					selected={this.state.selectedTab === Object.keys(HASH_MAP)[0]}
					onPress={() => {
						this.setState({
							selectedTab: Object.keys(HASH_MAP)[0],
						});
						this.linkTo(HASH_MAP.MEETING_CONTENT);
					}}
					data-seed="logId"
				>
					{this.props.pageContent || '暂无内容'}
				</TabBar.Item>
				<TabBar.Item
					icon={<Icon type="shopping-cart"/>}
					selectedIcon={<Icon type="shopping-cart"/>}
					title="选择小食"
					key="选择小食"
					selected={this.state.selectedTab === Object.keys(HASH_MAP)[1]}
					onPress={() => {
						this.setState({
							selectedTab: Object.keys(HASH_MAP)[1],
						});
						this.linkTo(HASH_MAP.GO_SHOPPING);
					}}
					data-seed="logId1"
				>
					{this.props.pageContent || '暂无内容'}
				</TabBar.Item>
				<TabBar.Item
					icon={<Icon type="team"/>}
					selectedIcon={<Icon type="team"/>}
					title="我的伙伴"
					key="我的伙伴"
					selected={this.state.selectedTab === Object.keys(HASH_MAP)[2]}
					onPress={() => {
						this.setState({
							selectedTab: Object.keys(HASH_MAP)[2],
						});
						this.linkTo(HASH_MAP.MY_PARTNER);
					}}
				>
					{this.props.pageContent || '暂无内容'}
				</TabBar.Item>
				<TabBar.Item
					icon={<Icon type="user"/>}
					selectedIcon={<Icon type="user"/>}
					title="个人中心"
					key="个人中心"
					selected={this.state.selectedTab === Object.keys(HASH_MAP)[3]}
					onPress={() => {
						this.setState({
							selectedTab: Object.keys(HASH_MAP)[3],
						});
						this.linkTo(HASH_MAP.PROFILE);
					}}
				>
					{this.props.pageContent || '暂无内容'}
				</TabBar.Item>
			</TabBar>
		);
	}
}

export default SiteTabBar;
