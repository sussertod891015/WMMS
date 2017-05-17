'use strict';

import {Toast} from 'antd-mobile';

const getTimestamp = ()=> {
	return Date.parse(new Date()) / 1000;
};

export default {
	namespace: 'SiteData',
	state: {
		firstLoadingFinish: false,
		MeetingContentData: {
			data: [],
			timestamp: ''
		},
		GoShoppingData: {
			data: [],
			currShopId: [],
			defaultShopId: [],
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
				isAdmin: true,
				tabData: {
					ProfileShopHistoryData: [],
					ProfileShopBestLoveData: [],
					ProfileMyMeetingContentData: []
				}
			},
			timestamp: ''
		},
		AdminData: {
			data: {
				meetingTime: '',
				isBuyDone: false,
				isSetAttendance: false,
				attendanceData: []
			},
			showAdminAttendance: false,
			timestamp: ''
		}
	},
	effects: {
		//四个页面拉取数据
		*fetchMeetingContentData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.MeetingContentData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				Toast.loading('加载中...');


				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 1000);
					})
				}, action);

				yield put({
					type: 'setMeetingContentData', MeetingContentData: {
						data: [
							{
								meetingCardId: 0,
								title: 'ANGULAR',
								previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
								name: 'YINGHAO.LIU',
								desc: '这是描述',
								date: '2017.1.1',
								voted: false,
								likedCount: 10
							},
							{
								meetingCardId: 1,
								title: 'WEBGL',
								previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
								name: 'PEI.LI',
								desc: '这是描述',
								date: '2017.1.1',
								voted: true,
								likedCount: 12
							},
							{
								meetingCardId: 2,
								title: 'REACT',
								previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
								name: 'XUEJIE.CUI',
								desc: '这是描述',
								date: '2017.1.2',
								voted: false,
								likedCount: 20
							}
						],
						timestamp: getTimestamp()
					}
				});


				Toast.hide();
			}
		},
		*fetchGoShoppingData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.GoShoppingData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				Toast.loading('加载中...');

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 1000);
					})
				}, action);

				yield put({
					type: 'setGoShoppingData', GoShoppingData: {
						data: [
							{
								tabName: '酸奶',
								tabData: Array.from(new Array(9)).map((_val, i) => ({
									id: i,
									icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
									text: '酸奶名字',
									choosenCounts: 50,
									likedCounts: 40
								}))
							},
							{
								tabName: '冰淇淋',
								tabData: Array.from(new Array(3)).map((_val, i) => ({
									id: i,
									icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
									text: '冰淇淋名字',
									choosenCounts: 20,
									likedCounts: 10
								}))
							}
						],
						// currShopId: [0, 0],
						currShopId: [],
						defaultShopId: [0, 2],
						timestamp: getTimestamp()
					}
				});

				Toast.hide();
			}
		},
		*fetchMyPartnerData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.MyPartnerData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				Toast.loading('加载中...');

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 1000);
					})
				}, action);

				yield put({
					type: 'setMyPartnerData', MyPartnerData: {
						data: [
							{
								partnerName: 'YINGHAO.LIU',
								avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
								partnerData: {
									lastShared: 'ANGULAR',
									shareCounts: 10,
									totalScore: 20,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'MENGTIAN.WEN',
								avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
								partnerData: {
									lastShared: '',
									shareCounts: 0,
									totalScore: 0,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'XUEJIE.CUI',
								avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
								partnerData: {
									lastShared: 'REACT',
									shareCounts: 1,
									totalScore: 3,
									bestLove: '酸奶'
								}
							},
							{
								partnerName: 'XIANG.LU',
								avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
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

				Toast.hide();
			}
		},
		*fetchProfileData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.ProfileData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				Toast.loading('加载中...');

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 1000);
					})
				}, action);

				yield put({
					type: 'setProfileData', ProfileData: {
						data: {
							username: 'XUEJIE.CUI',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
							stars: 1,
							isAdmin: true,
							tabData: {
								ProfileShopHistoryData: [
									{
										shopName: '酸奶1',
										shopDate: '2017-1-16'
									}
								],
								ProfileShopBestLoveData: [
									{
										shopName: '最爱小食1',
										shopCounts: 10
									},
									{
										shopName: '最爱小食2',
										shopCounts: 6
									}
								],
								ProfileMyMeetingContentData: [
									{
										title: 'ES6',
										name: 'XUEJIE.CUI',
										previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
										desc: '分享内容',
										date: '分享时间',
										likedCount: 12
									},
									{
										title: 'REACT',
										name: 'XUEJIE.CUI',
										previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
										desc: '分享内容',
										date: '分享时间',
										likedCount: 20
									}
								]
							}
						},
						timestamp: getTimestamp()
					}
				});

				Toast.hide();
			}
		},
		*fetchAdminData(action, {put, call, select}) {
			let currTime = getTimestamp();
			let prevTime = yield select(state => state.SiteData.ProfileData.timestamp);
			if (prevTime === '' || currTime - prevTime >= 60) {
				Toast.loading('加载中...');

				yield call(()=> {
					return new Promise(resolve=> {
						setTimeout(()=> {
							resolve();
						}, 1000);
					})
				}, action);

				yield put({
					type: 'setAdminData', AdminData: {
						data: {
							meetingTime: '',
							isBuyDone: false,
							isSetAttendance: false,
							attendanceData: [
								{
									name: 'XIANG.LU',
									attendance: true
								},
								{
									name: 'YINGHAO.LIU',
									attendance: true
								},
								{
									name: 'PEI.LI',
									attendance: false
								},
								{
									name: 'JUNQIANG.LI',
									attendance: true
								}
							]
						},
						showAdminAttendance: false,
						timestamp: getTimestamp()
					}
				});

				Toast.hide();
			}
		},
		//着陆页拉取数据
		*fetchAppData(action, {put, call, select}){
			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			yield put({
				type: 'setMeetingContentData', MeetingContentData: {
					data: [
						{
							meetingCardId: 0,
							title: 'ANGULAR',
							previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
							name: 'YINGHAO.LIU',
							desc: '这是描述',
							date: '2017.1.1',
							voted: false,
							likedCount: 10
						},
						{
							meetingCardId: 1,
							title: 'WEBGL',
							previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
							name: 'PEI.LI',
							desc: '这是描述',
							date: '2017.1.1',
							voted: true,
							likedCount: 12
						},
						{
							meetingCardId: 2,
							title: 'REACT',
							previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
							name: 'XUEJIE.CUI',
							desc: '这是描述',
							date: '2017.1.2',
							voted: false,
							likedCount: 20
						}
					],
					timestamp: getTimestamp()
				}
			});
			yield put({
				type: 'setGoShoppingData', GoShoppingData: {
					data: [
						{
							tabName: '酸奶',
							tabData: Array.from(new Array(9)).map((_val, i) => ({
								id: i,
								icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
								text: '酸奶名字',
								choosenCounts: 50,
								likedCounts: 40
							}))
						},
						{
							tabName: '冰淇淋',
							tabData: Array.from(new Array(3)).map((_val, i) => ({
								id: i,
								icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
								text: '冰淇淋名字',
								choosenCounts: 20,
								likedCounts: 10
							}))
						}
					],
					// currShopId: [0, 0],
					currShopId: [],
					defaultShopId: [0, 2],
					timestamp: getTimestamp()
				}
			});
			yield put({
				type: 'setMyPartnerData', MyPartnerData: {
					data: [
						{
							partnerName: 'YINGHAO.LIU',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
							partnerData: {
								lastShared: 'ANGULAR',
								shareCounts: 10,
								totalScore: 20,
								bestLove: '酸奶'
							}
						},
						{
							partnerName: 'MENGTIAN.WEN',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
							partnerData: {
								lastShared: '',
								shareCounts: 0,
								totalScore: 0,
								bestLove: '酸奶'
							}
						},
						{
							partnerName: 'XUEJIE.CUI',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
							partnerData: {
								lastShared: 'REACT',
								shareCounts: 1,
								totalScore: 3,
								bestLove: '酸奶'
							}
						},
						{
							partnerName: 'XIANG.LU',
							avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
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
				type: 'setProfileData', ProfileData: {
					data: {
						username: 'XUEJIE.CUI',
						avatar: 'https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png',
						stars: 1,
						isAdmin: true,
						tabData: {
							ProfileShopHistoryData: [
								{
									shopName: '酸奶1',
									shopDate: '2017-1-16'
								}
							],
							ProfileShopBestLoveData: [
								{
									shopName: '最爱小食1',
									shopCounts: 10
								},
								{
									shopName: '最爱小食2',
									shopCounts: 6
								}
							],
							ProfileMyMeetingContentData: [
								{
									title: 'ES6',
									name: 'XUEJIE.CUI',
									previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
									desc: '分享内容',
									date: '分享时间',
									likedCount: 12
								},
								{
									title: 'REACT',
									name: 'XUEJIE.CUI',
									previewImg: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
									desc: '分享内容',
									date: '分享时间',
									likedCount: 20
								}
							]
						}
					},
					timestamp: getTimestamp()
				}
			});
			const isAdmin = yield select(state=>state.SiteData.ProfileData.data.isAdmin);
			if (isAdmin) {
				yield put({
					type: 'setAdminData', AdminData: {
						data: {
							meetingTime: '',
							isBuyDone: false,
							isSetAttendance: false,
							attendanceData: [
								{
									name: 'XIANG.LU',
									attendance: true
								},
								{
									name: 'YINGHAO.LIU',
									attendance: true
								},
								{
									name: 'PEI.LI',
									attendance: false
								},
								{
									name: 'JUNQIANG.LI',
									attendance: true
								}
							]
						},
						showAdminAttendance: false,
						timestamp: getTimestamp()
					}
				});
			}
			yield put({
				type: 'loadingApp',
				firstLoadingFinish: true
			});
		},

		//提交点赞
		*setMeetingContentLikedCount(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const MeetingContentData = yield select(state=>state.SiteData.MeetingContentData);

			const data = MeetingContentData.data.concat();

			const reduceData = data.map((item, index)=> {
				if (item['meetingCardId'] === action['meetingCardId']) {
					item['voted'] = true;
					item['likedCount'] = 30;
				}
				return item;
			});

			yield put({
				type: 'setMeetingContentData', MeetingContentData: Object.assign(MeetingContentData, {
					data: Object.assign(MeetingContentData.data, reduceData)
				})
			});

			Toast.hide();
		},

		//选择小食
		*setGoShoppingCurrShopId(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const data = yield select(state=>state.SiteData.GoShoppingData);
			yield put({
				type: 'setGoShoppingData', GoShoppingData: Object.assign(data, {
					currShopId: action.currShopId
				})
			});

			Toast.hide();
		},

		//设置默认小食
		*setGoShoppingDefaultShopId(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const data = yield select(state=>state.SiteData.GoShoppingData);
			yield put({
				type: 'setGoShoppingData', GoShoppingData: Object.assign(data, {
					defaultShopId: action.defaultShopId
				})
			});

			Toast.hide();
		},

		//设置周会时间
		*setAdminMeetingTime(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const AdminData = yield select(state=>state.SiteData.AdminData);
			yield put({
				type: 'setAdminData', AdminData: Object.assign(AdminData, {
					data: Object.assign(AdminData.data, {
						meetingTime: action.meetingTime
					})
				})
			});

			Toast.hide();
		},

		//设置小食购买
		*setAdminBuyDone(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const AdminData = yield select(state=>state.SiteData.AdminData);
			yield put({
				type: 'setAdminData', AdminData: Object.assign(AdminData, {
					data: Object.assign(AdminData.data, {
						isBuyDone: action.isBuyDone
					})
				})
			});

			Toast.hide();
		},

		//设置人员出勤
		*setAdminAttendance(action, {put, call, select}){
			Toast.loading('加载中...');

			yield call(()=> {
				return new Promise(resolve=> {
					setTimeout(()=> {
						resolve();
					}, 1000);
				})
			}, action);

			const AdminData = yield select(state=>state.SiteData.AdminData);
			yield put({
				type: 'setAdminData', AdminData: Object.assign(AdminData, {
					data: Object.assign(AdminData.data, {
						isSetAttendance: action.isSetAttendance,
						attendanceData: action.attendanceData
					})
				})
			});

			yield put({
				type: 'toggleAdminAttendance',
				showAdminAttendance: false
			});

			Toast.hide();
		}
	},
	reducers: {
		loadingApp(state, {firstLoadingFinish}){
			return {...state, firstLoadingFinish}
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
		},
		setAdminData(state, {AdminData}){
			return {...state, AdminData}
		},
		toggleAdminAttendance(state, action){
			const AdminData = state.AdminData;
			return {
				...state, AdminData: Object.assign(AdminData, {
					showAdminAttendance: action.showAdminAttendance
				})
			}
		}
	}
};
