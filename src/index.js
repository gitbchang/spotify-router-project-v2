import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routeReducer, routerMiddleware }     from 'react-router-redux';
import { createHistory } from 'history';
import reducer from './reducers';
import App     from './components/App';
import Login   from './components/Login';
import User    from './components/User';
import Error   from './components/Error';


// Sync dispatched route actions to the history
/*
const reduxRouterMiddleware = syncHistoryWithStore(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  reduxRouterMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);
ss
*/

require('./style.less');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(thunk))
);

const finalRouter = (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="/user/:accessToken/:refreshToken" component={User} />
            <Route path="/error/:errorMsg" component={Error} />
          </Route>
        </Router>
      </Provider>
);

ReactDOM.render(
  finalRouter,
  document.getElementById('root')
);
