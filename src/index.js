import dva from 'dva';
import './index.css';
import createLogger from 'redux-logger';
import FastClick from 'fastclick';
// import Mock from 'mockjs';
import createLoading from 'dva-loading';
// import query from 'services/';

/******************************* model *******************************/
import SiteTabBar from './models/SiteTabBar';
import SiteShopBar from './models/SiteShopBar';
import SiteProfileTab from './models/SiteProfileTab';
import SiteProfileDatePicker from './models/SiteProfileDatePicker';
import SiteMeetingContentLikeModal from './models/SiteMeetingContentLikeModal';
import SiteData from './models/SiteData';
/******************************* model *******************************/


/******************************* route *******************************/
import RouterConfig from './router';
/******************************* route *******************************/

// let data = Mock.mock({
// 	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
// 	'list|1-10': [{
// 		// 属性 id 是一个自增数，起始值为 1，每次增 1
// 		'id|+1': 1
// 	}]
// });
//
// console.log(data);

FastClick.attach(document.body);

// 1. Initialize
const app = dva({
	onAction: createLogger(),
	onError(e) {
		console.log(e.message);
	}
});

// 2. Plugins
app.use(
	createLoading({
		effects: true
	})
);

// 3. Model
app.model(SiteTabBar);
app.model(SiteShopBar);
app.model(SiteProfileTab);
app.model(SiteProfileDatePicker);
app.model(SiteMeetingContentLikeModal);
app.model(SiteData);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
