'use strict';
import React, {Component} from 'react';
import SiteCard from '../../components/SiteCard';

class MeetingContent extends Component {
	render() {
		return (
			<div>
				<SiteCard/>
				<SiteCard/>
				<SiteCard/>
				<SiteCard/>
			</div>
		);
	};
}

export default MeetingContent;
