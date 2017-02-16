'use strict';
import HASH_MAP from '../../routeMap';

export default {
	namespace: 'SiteTabBar',
	state: {
		routeName: '/'
	},
	subscriptions: {
		setTab({history, dispatch}){
			return history.listen(({pathname}) => {
				dispatch({type: 'setTab', routeName: pathname});
			});
		}
	},
	effects: {
		// *save({payload: todo}, {put, call}) {
		// 	// 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
		// 	yield call(saveTodoToServer, todo);
		// 	yield put({type: 'add', payload: todo});
		// }
	},
	reducers: {
		// add(state, {id: todo}) {
		// 	// 保存数据到 state
		// 	return [...state, todo];
		// },
		setTab(state, {routeName}){
			const value = Object.values(HASH_MAP).filter((i)=>(i === routeName))[0];
			let key;
			for (var i in HASH_MAP) {
				if (HASH_MAP[i] === value) {
					key = i;
					break;
				}
			}
			return {...state, routeName: key};
		}
	}
};
