'use strict';
import {Toast} from 'antd-mobile';
import {HASH_MAP} from '../../utils/config';

export default {
	namespace: 'SiteTabBar',
	state: {
		routeName: HASH_MAP.MEETING_CONTENT
	},
	subscriptions: {
		subScriptTab({history, dispatch}){
			return history.listen(({pathname}) => {
				// dispatch({type: 'fetchPageData', routeName: pathname});
				dispatch({type: 'setTab', routeName: pathname});
			});
		}
	},
	effects: {},
	reducers: {
		// add(state, {id: todo}) {
		// 	// 保存数据到 state
		// 	return [...state, todo];
		// },
		setTab(state, {routeName}){
			const value = Object.values(HASH_MAP).filter((i)=>(i === routeName))[0];
			let key;
			for (let i in HASH_MAP) {
				if (HASH_MAP[i] === value) {
					key = i;
					break;
				}
			}
			return {...state, routeName: key};
		}
	}
};
