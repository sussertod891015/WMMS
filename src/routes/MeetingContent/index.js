'use strict';
import SiteCard from '../../components/SiteCard';
import SiteMeetingContentLikeModal from '../../components/SiteMeetingContentLikeModal';

const MeetingContent = ()=> {
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

export default MeetingContent;
