'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import {findDOMNode} from 'react-dom';
import {List, Accordion, Icon} from 'antd-mobile';
import {PEOPLE_INFO} from '../../utils/config';
import './style.css';

const getHeadImg = (name, txt)=> {
	return (
		<div className="headimg">
			<img src="http://img3.imgtn.bdimg.com/it/u=1395349040,1373069980&fm=214&gp=0.jpg" alt=""/>
			<div className="name">{name}</div>
			<div className="check_desc">{txt}</div>
		</div>
	);
};

const getInfoDesc = (data)=> {
	return (
		<div className="info_desc">
			<div className="lastest_shared">{PEOPLE_INFO.LAST_SHARED}：{data['lastShared']}</div>
			<div className="shared_count">{PEOPLE_INFO.SHARED_COUNT}：{data['shareCounts']} 次</div>
			<div className="shared_liked">
				{PEOPLE_INFO.STAR_COUNT}：{data['totalScore']} <Icon type="star"/>
			</div>
			<div className="best_loved">{PEOPLE_INFO.BEST_LOVE}：{data['bestLove']}</div>
		</div>
	);
};

const getAccordionPanel = (index, data, txt)=> {
	return (
		<Accordion.Panel ref={`ap_${index}`} key={index} header={getHeadImg(data['partnerName'], txt)}>
			<List className="my-list">
				<List.Item extra={getInfoDesc(data['partnerData'])}/>
			</List>
		</Accordion.Panel>
	);
};

class SitePeopleListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			txtArr: [0, 0, 0, 0]
		};
	}

	onChange(arr) {
		let newArr = [0, 0, 0, 0];
		arr.map((item, index)=> {
			newArr[parseInt(item)] = 1;
		});
		this.setState({
			txtArr: newArr
		});
	}

	render() {
		let _this = this;
		return (
			<Accordion onChange={(arr)=>this.onChange(arr)} className="my-accordion people_list">
				{this.props.SiteData.MyPartnerData.data.map((people, peopleIndex)=> {
					return getAccordionPanel(peopleIndex, people, _this.state.txtArr[peopleIndex] ? PEOPLE_INFO.BTN_NAME[1] : PEOPLE_INFO.BTN_NAME[0]);
				})}
			</Accordion>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(SitePeopleListItem);
