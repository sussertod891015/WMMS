'use strict';
import {Icon} from 'antd-mobile';

const SiteShopModalMessage = ()=> {
	return (
		<div>
			<div className="shop_name">商品名称：酸奶</div>
			<div className="shop_counts">已被点过：100次</div>
			<div className="shop_hot">商品评价：<Icon type="star"/></div>
		</div>
	);
};

export default SiteShopModalMessage;
