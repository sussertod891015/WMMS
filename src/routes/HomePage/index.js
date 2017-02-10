'use strict';
import React, {Component} from 'react';
import SiteTabBar from '../../components/TabBar';

class HomePage extends Component {
	render() {
		return (
			<div>
				<SiteTabBar pageContent={this.props.children}/>
			</div>
		);
	}
}

export default HomePage;
