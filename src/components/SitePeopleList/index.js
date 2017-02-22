'use strict';
import React, {Component} from 'react';
import {List, WingBlank} from 'antd-mobile';
import SitePeopleListItem from '../SitePeopleListItem';
import './style.css';

class SitePeopleList extends Component {
	render() {
		return (
			<div>
				<WingBlank size="sm">
					<List className="my-list">
						<SitePeopleListItem/>
					</List>
				</WingBlank>
			</div>
		);
	}
}

export default SitePeopleList;
