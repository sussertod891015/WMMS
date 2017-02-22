'use strict';
import React, {Component} from 'react';
import SiteCard from '../../components/SiteCard';
import SiteMeetingContentLikeModal from '../../components/SiteMeetingContentLikeModal';

class MeetingContent extends Component {
	render() {
		return (
			<div>
				<SiteCard/>
				<SiteCard/>
				<SiteCard/>
				<SiteCard/>
				<SiteMeetingContentLikeModal/>
			</div>
		);
	};
}

export default MeetingContent;
