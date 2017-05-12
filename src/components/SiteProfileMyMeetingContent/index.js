'use strict';
import React, {Component} from 'react';
import SiteCard from '../SiteCard';

const SiteProfileMyMeetingContent = (props)=> {
	return (
		<div>
			{props.data.map((content, index)=> {
				const {title, name, date, desc} = content;
				return <SiteCard key={index} title={title} name={name} date={date} desc={desc}/>
			})}
		</div>
	);
};

export default SiteProfileMyMeetingContent;
