'use strict';
const getTimestamp = ()=> {
	return Date.parse(new Date()) / 1000;
};

export default {
	namespace: 'SiteData',
	state: {
		loadingFinish: false,
		MeetingContentData: {
			data: [
				{
					title: '',
					name: '',
					desc: '',
					date: ''
				}
			],
			timestamp: ''
		},
		GoShoppingData: {
			data: [
				{
					tabName: '',
					tabData: []
				},
				{
					tabName: '',
					tabData: []
				}
			],
			timestamp: ''
		},
		MyPartnerData: {
			data: [],
			timestamp: ''
		},
		ProfileData: {
			data: {
				username: '未登录',
				avatar: '',
				stars: 0,
				isAdmin: false
			},
			timestamp: ''
		}
	},
	effects: {
		*fetchMeetingContentData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.MeetingContentData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				yield put({type: 'loadingApp', loadingFinish: false});

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 2000);
					})
				}, action);

				yield put({
					type: 'setMeetingContentData', MeetingContentData: {
						data: [
							{
								title: 'ANGULAR',
								name: 'YINGHAO.LIU',
								desc: '这是描述',
								date: '2017.1.1'
							},
							{
								title: 'ANGULAR',
								name: 'YINGHAO.LIU',
								desc: '这是描述',
								date: '2017.1.1'
							}
						],
						timestamp: getTimestamp()
					}
				});

				yield put({
					type: 'loadingApp',
					loadingFinish: true
				});
			}
		},
		*fetchGoShoppingData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.GoShoppingData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				yield put({type: 'loadingApp', loadingFinish: false});

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 2000);
					})
				}, action);

				yield put({
					type: 'setGoShoppingData', GoShoppingData: {
						data: [
							{
								tabName: '酸奶',
								tabData: Array.from(new Array(9)).map((_val, i) => ({
									icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
									text: `名字${i}`,
								}))
							},
							{
								tabName: '冰淇淋',
								tabData: Array.from(new Array(3)).map((_val, i) => ({
									icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
									text: `哈哈${i}`,
								}))
							}
						],
						timestamp: getTimestamp()
					}
				});

				yield put({
					type: 'loadingApp',
					loadingFinish: true
				});
			}
		},
		*fetchMyPartnerData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.MyPartnerData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				yield put({type: 'loadingApp', loadingFinish: false});

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 2000);
					})
				}, action);

				yield put({
					type: 'setMyPartnerData', MyPartnerData: {
						data: [
							{
								partnerName: 'YINGHAO.LIU',
								partnerData: {
									lastShared: 'ANGULAR',
									shareCounts: 10,
									totalScore: 20,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'MENGTIAN.WEN',
								partnerData: {
									lastShared: '',
									shareCounts: 0,
									totalScore: 0,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'XUEJIE.CUI',
								partnerData: {
									lastShared: 'REACT',
									shareCounts: 1,
									totalScore: 3,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'XIANG.LU',
								partnerData: {
									lastShared: 'JAVASCRIPT',
									shareCounts: 1,
									totalScore: 1,
									bestLove: '雪糕'
								}
							}
						],
						timestamp: getTimestamp()
					}
				});

				yield put({
					type: 'loadingApp',
					loadingFinish: true
				});
			}
		},
		*fetchProfileData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.ProfileData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				yield put({type: 'loadingApp', loadingFinish: false});

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 2000);
					})
				}, action);

				yield put({
					type: 'setProfileData', ProfileData: {
						data: {
							username: 'XUEJIE.CUI',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
							stars: 1,
							isAdmin: true
						},
						timestamp: getTimestamp()
					}
				});

				yield put({
					type: 'loadingApp',
					loadingFinish: true
				});
			}
		}
	},
	reducers: {
		loadingApp(state, {loadingFinish}){
			return {...state, loadingFinish}
		},
		setMeetingContentData(state, {MeetingContentData}){
			return {...state, MeetingContentData}
		},
		setGoShoppingData(state, {GoShoppingData}){
			return {...state, GoShoppingData}
		},
		setMyPartnerData(state, {MyPartnerData}){
			return {...state, MyPartnerData}
		},
		setProfileData(state, {ProfileData}){
			return {...state, ProfileData}
		}
	}
};
