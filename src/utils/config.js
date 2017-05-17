'use strict';

const HASH_MAP = {
	MEETING_CONTENT: '/',
	GO_SHOPPING: '/GoShopping',
	MY_PARTNER: '/MyPartner',
	PROFILE: '/Profile',
	ADMIN: '/Admin',
	ADMIN_PEOPLE: '/AdminPeople'
};

const TAB_BAR = [
	{
		NAME: '会议内容',
		ICON_TYPE: 'solution'
	},
	{
		NAME: '选择小食',
		ICON_TYPE: 'shopping-cart'
	},
	{
		NAME: '我的伙伴',
		ICON_TYPE: 'team'
	},
	{
		NAME: '个人中心',
		ICON_TYPE: 'user'
	},
	{
		NAME: '后台管理',
		ICON_TYPE: 'book'
	}
];

const PEOPLE_INFO = {
	BTN_NAME: ['查看', '收起'],
	LAST_SHARED: '最后一次分享',
	SHARED_COUNT: '累计分享次数',
	STAR_COUNT: '累计获得分数',
	BEST_LOVE: '最喜爱的小食'
};

const PROFILE_TAB_DATA = [
	{
		SiteProfileShopHistory: {
			TAB_NAME: '小食记录'
		}
	},
	{
		SiteProfileShopBestLove: {
			TAB_NAME: '最爱小食'
		}
	},
	{
		SiteProfileMyMeetingContent: {
			TAB_NAME: '分享历史'
		}
	}
];

export {
	HASH_MAP,
	TAB_BAR,
	PEOPLE_INFO,
	PROFILE_TAB_DATA
};
