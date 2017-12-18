import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, Link, IndexRoute, browserHistory, Redirect} from 'react-router';
import { App } from './App';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

let router;

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

const logedInRouter = (<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Redirect from="*" to='/'/>
    </Route>
  </Router>
</Provider>);

router = logedInRouter;
ReactDOM.render(router, document.querySelector('main'));
