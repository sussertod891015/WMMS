'use strict';
import {Icon, Button} from 'antd-mobile';
import './style.css';

const btn = false;

const SiteShopModalMessage = ()=> {
	return (
		<div>
			<div className="shop_name">商品名称：酸奶</div>
			<div className="shop_counts">已被点过：100次</div>
			<div className="shop_hot">商品评价：<Icon type="star"/></div>
			<div className="set_default">
				{btn ?
					<Button type="primary" size="small">设置为默认</Button> :
					<Button type="ghost" size="small">取消默认</Button>}
			</div>
		</div>
	);
};

export default SiteShopModalMessage;
