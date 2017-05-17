'use strict';
import React, {Component} from 'react';
import {Icon, Button} from 'antd-mobile';
import {connect} from 'dva';
import './style.css';

class SiteMeetingContentLike extends Component {
	handleClick(meetingCardId) {
		this.props.dispatch({
			type: 'SiteMeetingContentLikeModal/toggleLikeModalVisible',
			likeModalVisible: true,
			meetingCardId: meetingCardId
		});
	}

	render() {
		const {name, voted, likedCount, meetingCardId} = this.props;
		const {username} = this.props.SiteData.ProfileData.data;

		return (
			<div>
				{
					username === name ? (
						<div className="show_star">
							<Icon type="star"/> {likedCount}
						</div>
					) : (voted ?
						<div className="show_star">
							<Icon type="star"/> {likedCount}
						</div>
						:
						<Button className="count_btn"
								type="primary"
								size="small"
								icon="star"
								onClick={()=>this.handleClick(meetingCardId)}
						>为TA打分</Button>)
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteMeetingContentLikeModal: state.SiteMeetingContentLikeModal,
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteMeetingContentLike);
