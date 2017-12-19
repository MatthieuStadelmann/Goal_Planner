import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, Redirect } from 'react-router';
import { App } from './App';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import Register from './register';
import Login from './login';
import { Welcome } from './welcome';

let router;

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

const notLoggedInRouter = (<Router history={hashHistory}>
  <Route path="/" component={Welcome}>
    <Route path="/login" component={Login}/>
    <IndexRoute component={Register}/>
  </Route>
</Router>);

const logedInRouter = (<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Redirect from="*" to='/'/>
    </Route>
  </Router>
</Provider>);

if (location.pathname === '/welcome/') {
  router = notLoggedInRouter
} else {
  router = LogedInRouter
}

ReactDOM.render(router, document.querySelector('main'));
