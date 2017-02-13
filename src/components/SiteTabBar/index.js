'use strict';
import React, {Component} from 'react';
import {TabBar, Icon} from 'antd-mobile';
import {connect} from 'dva';
import HASH_MAP from '../../routeMap';
import './style.css';

const style = {
	paddingBottom: '1rem'
};

class SiteTabBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: this.props.SiteTabBar.routeName,
			hidden: false
		}
	}

	linkTo(hash) {
		window.location.hash = hash;
	}

	render() {
		console.log(this.props);
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
					<div style={style}>
						{this.props.pageContent || '暂无内容'}
					</div>
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
					<div style={style}>
						{this.props.pageContent || '暂无内容'}
					</div>
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
					<div style={style}>
						{this.props.pageContent || '暂无内容'}
					</div>
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
					<div style={style}>
						{this.props.pageContent || '暂无内容'}
					</div>
				</TabBar.Item>
			</TabBar>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteTabBar: state.SiteTabBar
	};
}

export default connect(mapStateToProps)(SiteTabBar);
