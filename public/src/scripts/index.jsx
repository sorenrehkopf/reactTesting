import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//custom components
import Main from './components/main.component.jsx';
import Home from './components/home.component.jsx';
import About from './components/about.component.jsx';
import Things from './components/things.component.jsx';

render(<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/things" component={Things}/>
		</Route>
	</Router>, 
	document.getElementById('app')
);