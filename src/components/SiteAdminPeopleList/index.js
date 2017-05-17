'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {List, Icon, Flex, Checkbox, Button} from 'antd-mobile';

const {Item} = List;

class SiteAdminPeopleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			attendanceData: []
		};
	}

	componentWillMount() {
		this.setState({
			attendanceData: this.props.SiteData.AdminData.data.attendanceData.concat()
		});
	}

	clickHandler(index) {
		const attendanceData = this.state.attendanceData.concat();
		attendanceData[index]['attendance'] = !attendanceData[index]['attendance'];
		this.setState({
			attendanceData: attendanceData
		});
	}

	doSaveAttendanceData() {
		this.props.dispatch({
			type: 'SiteData/setAdminAttendance',
			isSetAttendance: true,
			attendanceData: this.state.attendanceData
		});
	}

	hidePeopleList(){
		this.props.dispatch({
			type: 'SiteData/toggleAdminAttendance',
			showAdminAttendance: false
		});
	}

	render() {
		const {attendanceData} = this.props.SiteData.AdminData.data;
		return (
			<div className="my-list">
				<List renderHeader={() => '人员列表'}>
					{attendanceData.map((item, index)=> {
						return (
							<Item
								key={index}
								multipleLine
								onClick={()=> this.clickHandler(index)}
								extra={<Checkbox checked={this.state.attendanceData[index]['attendance']}/>}
							>
								{item.name}
							</Item>
						)
					})}
				</List>
				<Flex className="siteAdmin_btn_group">
					<Flex.Item>
						<Button type="warning"
								onClick={()=>this.hidePeopleList()}>取消</Button>
					</Flex.Item>
					<Flex.Item>
						<Button type="primary"
								onClick={()=> this.doSaveAttendanceData()}>确认</Button>
					</Flex.Item>
				</Flex>
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

export default connect(mapStateToProps)(SiteAdminPeopleList);
