'use strict';
import React,{Component} from 'react';
import {List, Accordion, Icon} from 'antd-mobile';

const getHeadImg = ()=> {
	return (
		<div className="headimg">
			<img src="http://img3.imgtn.bdimg.com/it/u=1395349040,1373069980&fm=214&gp=0.jpg" alt=""/>
			<div className="name">XUEJIE.CUI</div>
			<div className="check_desc">查看</div>
		</div>
	);
};

const getInfoDesc = ()=> {
	return (
		<div className="info_desc">
			<div className="lastest_shared">最近分享：Angular</div>
			<div className="shared_count">累计分享次数：10次</div>
			<div className="shared_liked">累计获得赞数：20个<Icon type="star"/></div>
			<div className="best_loved">最喜爱的小食：酸奶</div>
		</div>
	);
};
