import dva from 'dva';
import './index.css';
import createLogger from 'redux-logger';
import FastClick from 'fastclick';
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
// app.model(require('./models/TabBar'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
