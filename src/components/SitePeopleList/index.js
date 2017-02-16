'use strict';
import React, {Component} from 'react';
import {List, WingBlank} from 'antd-mobile';
import './style.css';

class SitePeopleList extends Component {
	render() {
		return (
			<div>
				<WingBlank size="sm">
					<List className="my-list">
						<List.Item onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
						<List.Item extra="箭头向右" arrow="horizontal" onClick={() => {
						}}>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
							<div>123</div>
						</List.Item>
					</List>
				</WingBlank>
			</div>
		);
	}
}

export default SitePeopleList;
