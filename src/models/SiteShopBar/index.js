'use strict';

export default {
	namespace: 'SiteShopBar',
	state: {
		tabCurrId: 0,
		shopCurrId: 0,
		modalVisible: false
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
		setTabCurrId(state, {tabCurrId}){
			return {...state, tabCurrId}
		},
		toggleModal(state, {shopCurrId, modalVisible}){
			return {...state, shopCurrId, modalVisible}
		}
	}
};
