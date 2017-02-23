'use strict';
import React, {Component} from 'react';
import {TabBar, Icon} from 'antd-mobile';
import {connect} from 'dva';
import {TAB_BAR, HASH_MAP} from '../../utils/config';
import './style.css';

const style = {
	paddingBottom: '1rem'
};

class SiteTabBar extends Component {
	linkTo(hash) {
		window.location.hash = hash;
	}

	getChildren() {
		return Object.values(HASH_MAP).map((item, index)=> {
			let browserHash = window.location.hash;
			let hash = browserHash.substring(1, browserHash.indexOf('?'));
			if (item === hash) {
				return index;
			}
		});
	}

	render() {
		return (
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#33A3F4"
				barTintColor="white"
				hidden={false}
			>
				{TAB_BAR.map((item, index)=> {
					return (
						<TabBar.Item
							title={item['NAME']}
							key={item['NAME']}
							icon={<Icon type={item['ICON_TYPE']}/>}
							selectedIcon={<Icon type={item['ICON_TYPE']}/>}
							selected={this.props.SiteTabBar.routeName === Object.keys(HASH_MAP)[index]}
							onPress={() => this.linkTo(Object.values(HASH_MAP)[index])}
						>
							<div style={style}>
								{this.getChildren().includes(index) ? this.props.pageContent : '暂无内容'}
							</div>
						</TabBar.Item>
					);
				})}
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
