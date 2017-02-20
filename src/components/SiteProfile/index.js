'use strict';
import React, {Component} from 'react';
import {Result, Button, WingBlank, Icon, DatePicker} from 'antd-mobile';
import SiteProfileTab from '../SiteProfileTab';
import SiteProfileDatePicker from '../SiteProfileDatePicker';
import './style.css';

const btnStatus = true;
const num = 50;

const getStarComponent = ()=> {
	return num ?
		<div>
			<Icon type={"star"} className="my_star"/>
			<span className="txt_before">{"已获得"}</span>
			{<span>{num}</span>}
			{<span className="txt_after">个赞</span>}
			<Icon type={"star"} className="my_star"/>
		</div>
		:
		<div>
			<Icon type={"star-o"} className="my_star"/>
			<span className="txt_before">{"还未获得过赞"}</span>
			<Icon type={"star-o"} className="my_star"/>
		</div>;
};

class SiteProfile extends Component {
	render() {
		return (
			<div>
				<Result
					imgUrl="https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png"
					title="XUEJIE.CUI"
					message={getStarComponent()}
				/>
				{btnStatus ? <SiteProfileDatePicker/> : ''}
				<SiteProfileTab/>
			</div>
		);
	}
}

export default SiteProfile;
