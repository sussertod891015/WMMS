'use strict';
import React, {Component} from 'react';
import SiteShopBar from '../../components/SiteShopBar';
import SiteShopGrid from '../../components/SiteShopGrid';

class GoShopping extends Component {
	render() {
		return (
			<div>
				<SiteShopBar/>
				<SiteShopGrid/>
			</div>
		);
	}
}

export default GoShopping;
