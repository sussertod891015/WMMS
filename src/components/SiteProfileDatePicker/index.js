'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {DatePicker, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import moment from 'moment';
import './style.css';

const zhNow = moment().locale('zh-cn').utcOffset(8);

const Btn = (props) => (
	<div className="datePicker_btn" onClick={props.onClick}>{props.children}</div>
);

class ProfileDatePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: zhNow,
			visible: false
		}
	}

	render() {
		const {meetingTime} = this.props.SiteData.AdminData.data;
		return (
			<DatePicker
				mode="date"
				title="选择日期"
				extra="请选择(可选)"
				value={meetingTime}
				onChange={(time) => this.props.dispatch({
					type: 'SiteData/setAdminMeetingTime',
					meetingTime: time
				})}
			>
				<Btn>{!meetingTime ? "未设置" : meetingTime.format().substring(0, 10)}</Btn>
			</DatePicker>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(ProfileDatePicker);
