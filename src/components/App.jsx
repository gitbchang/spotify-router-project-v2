import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';

import Main from './Main';
import Gallery from './Gallery';
import User from './User';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

function mapStateToProps(state) {
  return {
    accessToken: state.accessToken,
    refreshToken: state.refreshToken,
    user: state.user
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

// export default class App extends Component {
//   render() {
//     // injected via react router
//     const {children} = this.props;
//     return (
//       <div className='mainDiv'>
//         <TopBar />
//         <div className="page-content">
//           {children}
//         </div>
//         <BottomBar />
//       </div>
//     );
//   }
// }
