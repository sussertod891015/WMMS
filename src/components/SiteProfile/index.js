'use strict';
import React, {Component} from 'react';
import {Result, Button, WingBlank, Icon} from 'antd-mobile';
import SiteProfileTab from '../SiteProfileTab';
import './style.css';

const btnStatus = false;
const num = 50;

const getStarComponent = ()=> {
	return (
		<div>
			<Icon type={num ? "star" : "star-o"} className="my_star"/>
			<span className="txt_before">{num ? "已获得" : "还未获得过赞"}</span>
			{num ? <span>{num}</span> : ""}
			{num ? <span className="txt_after">个赞</span> : ""}
			<Icon type={num ? "star" : "star-o"} className="my_star"/>
		</div>
	);
};

const SiteProfile = ()=> {
	return (
		<div>
			<Result
				imgUrl="https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png"
				title="XUEJIE.CUI"
				message={getStarComponent()}
				buttonText={btnStatus ? "结束本期选择" : ""}
				buttonType={btnStatus ? "primary" : ""}
			/>
			<SiteProfileTab/>
		</div>
	);
};

export default SiteProfile;
