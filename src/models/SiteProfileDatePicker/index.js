'use strict';

export default {
	namespace: 'SiteProfileDatePicker',
	state: {
		meetingTime: ''
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
		setMeetingTime(state, {meetingTime}){
			return {...state, meetingTime}
		}
	}
};