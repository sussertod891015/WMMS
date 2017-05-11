import React,{Component} from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import HomePage from './routes/HomePage';
import MeetingContent from './routes/MeetingContent';
import GoShopping from './routes/GoShopping';
import MyPartner from './routes/MyPartner';
import Profile from './routes/Profile';

function RouterConfig({history}) {
	return (
		<Router history={history}>
			<Route path="/" component={HomePage}>
				<IndexRoute component={MeetingContent}/>
				<Route path="/MyPartner" component={MyPartner}/>
				<Route path="/GoShopping" component={GoShopping}/>
				<Route path="/Profile" component={Profile}/>
			</Route>
		</Router>
	);
}

export default RouterConfig;
