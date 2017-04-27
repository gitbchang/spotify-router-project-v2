import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';

import Gallery from './Gallery';
import User from './User';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

export default class Main extends Component {
  render() {
    // injected via react router
    const {children} = this.props;
    return (
      <div className='mainDiv'>
        <TopBar />
        <div className="page-content">
          {children}
        </div>
        <BottomBar />
      </div>
    );
  }
}