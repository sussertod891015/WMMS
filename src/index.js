import dva from 'dva';
import './index.css';
import createLogger from 'redux-logger';
import FastClick from 'fastclick';
import Mock from 'mockjs';
// import query from 'services/';

let data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'list|1-10': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1
	}]
});

console.log(data);

// fetch('hello.json');


FastClick.attach(document.body);

// 1. Initialize
const app = dva({
	onAction: createLogger(),
	onError(e) {
		console.log(e.message);
	}
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/SiteHomePage'));
app.model(require('./models/SiteTabBar'));
app.model(require('./models/SiteShopBar'));
app.model(require('./models/SiteProfileTab'));
app.model(require('./models/SiteProfileDatePicker'));
app.model(require('./models/SiteMeetingContentLikeModal'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
