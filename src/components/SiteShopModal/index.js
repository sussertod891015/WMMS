'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {Modal, Card} from 'antd-mobile';
import SiteShopModalMessage from '../SiteShopModalMessage';
import './style.css';

class SiteShopModal extends Component {
	onClose() {
		this.props.dispatch({
			type: 'SiteShopBar/toggleModal',
			shopCurrId: this.props.SiteShopBar.shopCurrId,
			modalVisible: false
		});
	}

	render() {
		return (
			<Modal
				title="小食信息"
				transparent
				closable={false}
				visible={this.props.SiteShopBar.modalVisible}
				onClose={()=>this.onClose()}
				footer={[{
					text: '取消', onPress: () => {
						this.onClose();
					}
				},{
					text: '确认下单', onPress: () => {
						this.onClose();
					}
				}]}
			>
				<div className="my_modal">
					<Card full>
						<Card.Header
							thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
							extra={<SiteShopModalMessage/>}
						/>
					</Card>
				</div>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar
	}
}

export default connect(mapStateToProps)(SiteShopModal);
