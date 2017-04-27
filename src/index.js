import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routeReducer, routerMiddleware }     from 'react-router-redux';
import { createHistory } from 'history';


// Components
import reducer from './reducers';
import App     from './components/App';
import Login   from './components/Login';
import User    from './components/User';
import Error   from './components/Error';
import Gallery from './components/Gallery';

// material UI themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  grey600,
  fullWhite,
} from '../node_modules/material-ui/styles/colors';
import spacing from '../node_modules/material-ui/styles/spacing';
import {fade} from '../node_modules/material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto:300, Helvetica Neue, Arial, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: '#1DB954',
    primary2Color: '#1DB954',
    primary3Color: grey600,
    accent1Color: '#191414',
    accent2Color: '#191414',
    accent3Color: '#191414',
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: fullWhite,
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
});
// material-ui touch
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



// Create redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(thunk))
);

// React Router const
const finalRouter = (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Login} />
              <Route path="/user/:accessToken/:refreshToken" component={User} />
              <Route path="/error/:errorMsg" component={Error} />
              <Route path="/search" component={Gallery} />
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
);

ReactDOM.render(
  finalRouter,
  document.getElementById('root')
);
