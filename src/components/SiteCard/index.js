'use strict';
import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import SiteMeetingContentLike from '../SiteMeetingContentLike';
import './style.css';

export default class SiteCard extends Component {
	render() {
		return (
			<WingBlank size="sm">
				<WhiteSpace size="sm"/>
				<Card className="meetingContent_card">
					<Card.Header
						title={this.props.title}
						thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
						extra={<div>{this.props.date}</div>}
					/>
					<Card.Body>
						<div>{this.props.desc}</div>
					</Card.Body>
					<Card.Footer content={this.props.name} extra={<SiteMeetingContentLike count="8"/>}/>
				</Card>
				<WhiteSpace size="sm"/>
			</WingBlank>
		);
	}
}
