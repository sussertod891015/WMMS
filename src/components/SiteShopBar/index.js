'use strict';
import React, {Component} from 'react';
import {SegmentedControl, WingBlank} from 'antd-mobile';

const SHOP_DATA = {
	YOGHOURT: '酸奶',
	ICECREAM: '冰淇淋'
};

class SiteShopBar extends Component {
	onChange(e) {
		console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
	}

	onValueChange(value) {
		console.log(value);
	}

	render() {
		return (
			<WingBlank size="sm" className="sc-example">
				<SegmentedControl
					values={Object.values(SHOP_DATA)}
					onChange={this.onChange}
					onValueChange={this.onValueChange}
				/>
			</WingBlank>
		);
	}
}

export default SiteShopBar;
