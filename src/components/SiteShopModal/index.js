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

	onConfirm() {
		const {tabCurrId, shopCurrId} = this.props.SiteShopBar;
		this.props.dispatch({
			type: 'SiteData/setGoShoppingCurrShopId',
			currShopId: [tabCurrId, shopCurrId]
		});
		this.onClose();
	}

	getCurrShoppingData() {
		const {data} = this.props.SiteData.GoShoppingData;
		const {tabCurrId, shopCurrId} = this.props.SiteShopBar;
		if (data.length > 0) {
			const shopData = data[tabCurrId]['tabData'].filter((content)=> {
				return shopCurrId === content.id;
			});

			return shopData[0];
		} else {
			return '';
		}
	}

	render() {
		const dispatchDefaultShopIdFunc = (defaultShopId)=> {
			this.props.dispatch({
				type: 'SiteData/setGoShoppingDefaultShopId',
				defaultShopId: defaultShopId
			});
		};
		return (
			<Modal title="小食信息"
				   className="shop_modal"
				   transparent
				   closable={false}
				   visible={this.props.SiteShopBar.modalVisible}
				   onClose={()=>this.onClose()}
				   footer={[{
					   text: '取消', onPress: () => {
						   this.onClose();
					   }
				   }, {
					   text: '确认下单', onPress: () => {
						   this.onConfirm();
					   }
				   }]}
			>
				<div className="my_modal">
					<Card full>
						<Card.Header
							thumb={this.getCurrShoppingData()['icon']}
							extra={
								<SiteShopModalMessage
									tabCurrId={this.props.SiteShopBar.tabCurrId}
									data={this.getCurrShoppingData()}
									defaultId={this.props.SiteData.GoShoppingData.defaultShopId}
									dispatchDefaultShopIdFunc={dispatchDefaultShopIdFunc}
								/>
							}
						/>
					</Card>
				</div>
			</Modal>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteShopBar: state.SiteShopBar,
		SiteData: state.SiteData
	}
}

export default connect(mapStateToProps)(SiteShopModal);
