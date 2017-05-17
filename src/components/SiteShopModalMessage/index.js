'use strict';
import {Icon, Button} from 'antd-mobile';
import './style.css';

const SiteShopModalMessage = (props)=> {
	const {id, icon, choosenCounts, text, likedCounts} = props.data;
	const {tabCurrId, defaultId, dispatchDefaultShopIdFunc} = props;

	return (
		<div>
			<div className="shop_name">商品名称：{text}</div>
			<div className="shop_counts">已被点过：{choosenCounts}次</div>
			<div className="shop_hot">商品评价：{likedCounts} <Icon type="star"/></div>
			<div className="set_default">
				{defaultId[0] === tabCurrId && defaultId[1] === id ?
					<Button type="ghost" disabled size="small">取消默认</Button>
					:
					<Button type="primary" size="small"
							onClick={()=>dispatchDefaultShopIdFunc([tabCurrId, id])}>设置为默认</Button>
				}
			</div>
		</div>
	);
};

export default SiteShopModalMessage;
