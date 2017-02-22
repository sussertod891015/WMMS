'use strict';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {List, Accordion, Icon} from 'antd-mobile';
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

const getInfoDesc = ()=> {
	return (
		<div className="info_desc">
			<div className="lastest_shared">最近一次分享：Angular</div>
			<div className="shared_count">累计分享次数：10次</div>
			<div className="shared_liked">累计获得赞数：20个<Icon type="star"/></div>
			<div className="best_loved">最喜爱的小食：酸奶</div>
		</div>
	);
};

const getAccordionPanel = (index, name, txt)=> {
	return (
		<Accordion.Panel ref={`ap_${index}`} key={index} header={getHeadImg(name, txt)}>
			<List className="my-list">
				<List.Item extra={getInfoDesc()}/>
			</List>
		</Accordion.Panel>
	);
};

const peopleList = [
	'YINGHAO.LIU',
	'MENGTIAN.WEN',
	'XUEJIE.CUI',
	'XIANG.LU'
];

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
				{peopleList.map((name, peopleIndex)=> {
					return getAccordionPanel(peopleIndex, name, _this.state.txtArr[peopleIndex] ? '收起' : '查看');
				})}
			</Accordion>
		);
	}
}

export default SitePeopleListItem;
