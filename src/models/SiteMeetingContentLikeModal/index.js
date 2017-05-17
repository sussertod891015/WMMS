'use strict';

export default {
	namespace: 'SiteMeetingContentLikeModal',
	state: {
		likeModalVisible: false,
		meetingCardId: 0,
		likeCount: 1
	},
	effects: {
	},
	reducers: {
		toggleLikeModalVisible(state, {likeModalVisible, meetingCardId}){
			return {...state, likeModalVisible, meetingCardId}
		},
		setLikeCount(state, {likeCount}){
			return {...state, likeCount}
		}
	}
};
