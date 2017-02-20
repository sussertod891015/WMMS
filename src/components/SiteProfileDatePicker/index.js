'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {DatePicker, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import moment from 'moment';
import './style.css';

const zhNow = moment().locale('zh-cn').utcOffset(8);

const Btn = (props) => (
	<div className="btn">
		<WingBlank size="lg">
			<Button type="primary" onClick={props.onClick}>{props.children}</Button>
			<WhiteSpace size="lg"/>
		</WingBlank>
	</div>
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
		const mt = this.props.SiteProfileDatePicker.meetingTime;
		return (
			<div>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择(可选)"
					value={mt}
					onChange={(v) => this.props.dispatch({
						type: 'SiteProfileDatePicker/setMeetingTime',
						meetingTime: v
					})}
				>
					<Btn>{!mt ? "设置周会时间 (当前未设置)" : `设置周会时间 (${mt.format().substring(0, 10)})`}</Btn>
				</DatePicker>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteProfileDatePicker: state.SiteProfileDatePicker
	};
}

export default connect(mapStateToProps)(ProfileDatePicker);
