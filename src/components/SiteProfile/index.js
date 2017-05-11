'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {Result, Button, WingBlank, Icon, DatePicker} from 'antd-mobile';
import SiteProfileTab from '../SiteProfileTab';
import SiteProfileDatePicker from '../SiteProfileDatePicker';
import './style.css';

const getStarComponent = (num)=> {
	return num ?
		<div>
			<Icon type={"star"} className="my_star"/>
			<span className="txt_before">{"已获得"}</span>
			{<span> {num} </span>}
			{<span className="txt_after">个赞</span>}
			<Icon type={"star"} className="my_star"/>
		</div>
		:
		<div>
			<Icon type={"star-o"} className="my_star"/>
			<span className="txt_before"> {"还未获得过赞"} </span>
			<Icon type={"star-o"} className="my_star"/>
		</div>;
};

class SiteProfile extends Component {
	render() {
		const {
			stars,
			username,
			avatar,
			isAdmin
		} = this.props.SiteData.ProfileData.data;
		console.log(avatar);
		return (
			<div>
				<Result
					imgUrl={avatar}
					title={username}
					message={getStarComponent(stars)}
				/>
				{isAdmin ? <SiteProfileDatePicker/> : ''}
				<SiteProfileTab/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(SiteProfile);
