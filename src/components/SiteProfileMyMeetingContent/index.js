'use strict';
import React, {Component} from 'react';
import SiteCard from '../SiteCard';

const SiteProfileMyMeetingContent = (props)=> {
	return (
		<div>
			{props.data.map((content, index)=> {
				const {title, name, date, desc,likedCount} = content;
				return <SiteCard key={index} title={title} name={name} date={date} desc={desc} likedCount={likedCount}/>
			})}
		</div>
	);
};

export default SiteProfileMyMeetingContent;
