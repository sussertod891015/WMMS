'use strict';
import React, {Component} from 'react';
import {Icon, Button} from 'antd-mobile';
import {connect} from 'dva';
import './style.css';

const hadLiked = false;

class SiteMeetingContentLike extends Component {
	handleClick() {
		this.props.dispatch({
			type: 'SiteMeetingContentLikeModal/toggleLikeModalVisible',
			likeModalVisible: true
		});
	}

	render() {
		return (
			<div>
				{
					hadLiked ?
						<div className="show_star">
							<Icon type="star"/> 8
						</div>
						:
						<Button className="count_btn"
								type="primary"
								size="small"
								icon="star"
								onClick={()=>this.handleClick()}
						>为TA打分</Button>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteMeetingContentLikeModal: state.SiteMeetingContentLikeModal
	}
}

export default connect(mapStateToProps)(SiteMeetingContentLike);
