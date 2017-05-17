'use strict';
import React, {Component} from 'react';
import {connect} from 'dva';
import SiteCard from '../../components/SiteCard';
import SiteMeetingContentLikeModal from '../../components/SiteMeetingContentLikeModal';

class MeetingContent extends Component {
	componentWillMount() {
		this.props.dispatch({
			type: 'SiteData/fetchMeetingContentData'
		});
	}

	render() {
		return (
			<div>
				{this.props.SiteData.MeetingContentData.data.map((item, index)=> {
					const {title, name, previewImg, desc, date, voted, likedCount, meetingCardId} = item;
					return <SiteCard
						key={index}
						previewImg={previewImg}
						title={title}
						name={name}
						desc={desc}
						date={date}
						voted={voted}
						likedCount={likedCount}
						meetingCardId={meetingCardId}
					/>
				})}
				<SiteMeetingContentLikeModal/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		SiteData: state.SiteData
	};
}

export default connect(mapStateToProps)(MeetingContent);
