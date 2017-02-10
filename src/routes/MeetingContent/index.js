'use strict';
import React, {Component} from 'react';
import SiteCard from '../../components/SiteCard';

const style = {
	paddingBottom: '1rem'
};

const MeetingContent = ()=> {
	return (
		<div style={style}>
			<SiteCard/>
			<SiteCard/>
			<SiteCard/>
			<SiteCard/>
		</div>
	);
};

export default MeetingContent;
