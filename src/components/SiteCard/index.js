'use strict';
import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import SiteMeetingContentLike from '../SiteMeetingContentLike';
import './style.css';

export default class SiteCard extends Component {
	render() {
		const {title, date, desc, name, previewImg, voted, likedCount, meetingCardId} = this.props;
		return (
			<div>
				<WhiteSpace size="sm"/>
				<Card full className="meetingContent_card">
					<Card.Header
						title={title}
						thumb={previewImg}
						extra={date}
					/>
					<Card.Body>
						<div>{desc}</div>
					</Card.Body>
					<Card.Footer content={name}
								 extra={
									 <SiteMeetingContentLike
										 voted={voted}
										 likedCount={likedCount}
										 name={name}
										 meetingCardId={meetingCardId}/>
								 }/>
				</Card>
				<WhiteSpace size="sm"/>
			</div>
		);
	}
}
