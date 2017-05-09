'use strict';

export default {
	namespace: 'SiteHomePage',
	state: {
		loadingFinish: false
	},
	effects: {
		*fetchData(action, {put, call}) {
			yield put({type: 'request', loadingFinish: false});

			yield call((loading)=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve(loading);
					}, 2000);
				})
			}, action.loadingFinish);

			yield put({
				type: 'loadingDone',
				loadingFinish: true
			});
		}
	},
	reducers: {
		loadingDone(state, {loadingFinish}){
			return {...state, loadingFinish}
		},
		request(state, {loadingFinish}) {
			return {...state, loadingFinish};
		},
		response(state, {loadingFinish}) {
			return {...state, loadingFinish};
		}
	}
};
