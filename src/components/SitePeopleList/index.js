'use strict';
import React, {Component} from 'react';
import {List, WingBlank} from 'antd-mobile';
import SitePeopleListItem from '../SitePeopleListItem';
import './style.css';

class SitePeopleList extends Component {
	render() {
		return (
			<div>
				<List className="my-list">
					<SitePeopleListItem/>
				</List>
			</div>
		);
	}
}

export default SitePeopleList;
