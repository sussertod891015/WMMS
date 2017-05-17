'use strict';

export default {
	namespace: 'SiteProfileDatePicker',
	state: {
		meetingTime: ''
	},
	effects: {
	},
	reducers: {
		setMeetingTime(state, {meetingTime}){
			return {...state, meetingTime}
		}
	}
};
