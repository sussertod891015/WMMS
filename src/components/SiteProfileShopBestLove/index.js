'use strict';
import {List} from 'antd-mobile';

const SiteProfileShopHistory = (props)=> {
	return (
		<div>
			{props.data.map((content, index)=> {
				return <List.Item key={index} extra="箭头向右" arrow="horizontal" onClick={() => {
				}}>{content}</List.Item>
			})}
		</div>
	);
};

export default SiteProfileShopHistory;
