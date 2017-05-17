'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {Modal} from 'antd-mobile';
import './style.css';

class SiteAdminModal extends Component {
	onClose() {
		this.props.dispatch({
			type: 'SiteAdmin/toggleBugDoneModal',
			hideBuyDoneModal: false
		});
	}

	onConfirm() {
		this.props.dispatch({
			type: 'SiteData/setAdminBuyDone',
			isBuyDone: true
		});
		this.onClose();
	}

	render() {
		const {showBuyDoneModal} = this.props.SiteAdmin;
		return (
			<Modal title="购买完成 ？"
				   className="shop_modal"
				   transparent
				   closable={false}
				   visible={showBuyDoneModal}
				   onClose={()=>this.onClose()}
				   footer={[{
					   text: '取消', onPress: () => {
						   this.onClose();
					   }
				   }, {
					   text: '确认', onPress: () => {
						   this.onConfirm();
					   }
				   }]}
			>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData,
		SiteAdmin: state.SiteAdmin
	}
}

export default connect(mapStateToProps)(SiteAdminModal);
