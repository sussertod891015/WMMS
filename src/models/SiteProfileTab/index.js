'use strict';

export default {
	namespace: 'SiteProfileTab',
	state: {
		currId: '0'
	},
	effects: {

	},
	reducers: {
		// add(state, {id: todo}) {
		// 	// 保存数据到 state
		// 	return [...state, todo];
		// },
		setCurrId(state, {currId}){
			return {...state, currId}
		}
	}
};
