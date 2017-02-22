'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {Modal, Icon, Button} from 'antd-mobile';
import './style.css';

class SiteMeetingContentLikeModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			starLen: 5,
			likeCountIndex: 1
		}
	}

	onClose() {
		this.props.dispatch({
			type: 'SiteMeetingContentLikeModal/toggleLikeModalVisible',
			likeModalVisible: false
		});
	}

	setLikeCount(index) {
		this.setState({
			likeCountIndex: index + 1
		});
	}

	render() {
		return (
			<Modal className="like_modal"
				   title="打分"
				   transparent
				   closable={false}
				   visible={this.props.SiteMeetingContentLikeModal.likeModalVisible}
				   onClose={()=>this.onClose()}
				   footer={[{
					   text: '取消', onPress: () => {
						   this.onClose();
					   }
				   }, {
					   text: '确认', onPress: () => {
						   this.onClose();
					   }
				   }]}
			>
				<div className="like_modal_content">
					{
						Array.from({length: this.state.starLen}, (item, index) =>
							<Button key={index}
									className="like_star"
									icon={index < this.state.likeCountIndex ? "star" : "star-o"}
									onClick={()=>this.setLikeCount(index)}/>)
					}
				</div>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteMeetingContentLikeModal: state.SiteMeetingContentLikeModal
	}
}

export default connect(mapStateToProps)(SiteMeetingContentLikeModal);
