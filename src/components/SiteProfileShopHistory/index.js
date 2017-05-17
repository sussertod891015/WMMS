'use strict';
import React, {Component} from 'react';
import {List} from 'antd-mobile';

const SiteProfileShopHistory = (props)=> {
	return (
		<div>
			{props.data.map((content, index)=> {
				return <List.Item key={index} extra={content['shopDate']} onClick={() => {
				}}>{content['shopName']}</List.Item>
			})}
		</div>
	);
};

export default SiteProfileShopHistory;
