'use strict';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import './style.css';

const SiteCard = ()=> {
	return (
		<WingBlank size="sm">
			<WhiteSpace size="sm"/>
			<Card>
				<Card.Header
					title="这是 title"
					thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
					extra={<span>this is extra</span>}
				/>
				<Card.Body>
					<div>这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容</div>
				</Card.Body>
				<Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>}/>
			</Card>
			<WhiteSpace size="sm"/>
		</WingBlank>
	);
};

export default SiteCard;
