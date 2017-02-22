'use strict';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import SiteMeetingContentLike from '../SiteMeetingContentLike';
import './style.css';


const SiteCard = ()=> {
	return (
		<WingBlank size="sm">
			<WhiteSpace size="sm"/>
			<Card className="meetingContent_card">
				<Card.Header
					title="ANGULAR"
					thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
					extra={<div>2017-1-20</div>}
				/>
				<Card.Body>
					<div>这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容</div>
				</Card.Body>
				<Card.Footer content="YINGHAO.LIU" extra={<SiteMeetingContentLike count="8"/>}/>
			</Card>
			<WhiteSpace size="sm"/>
		</WingBlank>
	);
};

export default SiteCard;
