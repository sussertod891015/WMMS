'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {List, Button, Icon} from 'antd-mobile';
import SiteProfileDatePicker from '../SiteProfileDatePicker';
import SiteAdminModal from '../SiteAdminModal'
import './style.css';

const {Item} = List;

class SiteAdminSetting extends Component {
	showBuyDoneModal() {
		this.props.dispatch({
			type: 'SiteAdmin/toggleBugDoneModal',
			showBuyDoneModal: true
		});
	}

	showPeopleList() {
		this.props.dispatch({
			type: 'SiteData/toggleAdminAttendance',
			showAdminAttendance: true
		});
	}

	render() {
		const {isBuyDone, isSetAttendance} = this.props.SiteData.AdminData.data;
		return (
			<div>
				<List renderHeader={() => '设置'} className="my-list my-admin-people-list">
					<Item
						multipleLine
						thumb={
							<Icon type="clock-circle-o"/>
						}
						className="datepicker-item"
						arrow="horizontal"
						extra={
							<SiteProfileDatePicker/>
						}
						onClick={()=> {
						}}
					>设置周会时间</Item>
					<Item
						multipleLine
						arrow="horizontal"
						thumb={
							<i className="iconfont icon-deleteuser" style={{color: '#000'}}/>
						}
						extra={
							!isSetAttendance ? '未设置' : '完成'
						}
						onClick={()=>this.showPeopleList()}
					>
						设置人员出勤
					</Item>
					<Item
						multipleLine
						arrow="horizontal"
						thumb={
							<i className="iconfont icon-carryout" style={{color: '#000'}}/>
						}
						extra={
							!isBuyDone ? '未完成' : '完成'
						}
						onClick={()=> {
							!isBuyDone ? this.showBuyDoneModal() : ''
						}}
					>设置购买完成</Item>
				</List>
				<SiteAdminModal/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteAdmin: state.SiteAdmin,
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteAdminSetting);
