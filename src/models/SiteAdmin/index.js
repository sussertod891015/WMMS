'use strict';

export default {
	namespace: 'SiteAdmin',
	state: {
		showBuyDoneModal: false
	},
	effects: {},
	reducers: {
		toggleBugDoneModal(state, {showBuyDoneModal}){
			return {...state, showBuyDoneModal}
		}
	}
};
