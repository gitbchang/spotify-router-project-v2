import React, { Component } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

export default class SpotifyLogin extends Component {
  render() {
    // injected via react router
    const {children} = this.props;
    return (
      <div className='mainDiv'>
        <TopBar />
        <div className="page-content">
          <p>This is an example of the Authorization Code flow using routes.</p>
          {children}
        </div>
        <BottomBar />
      </div>
    );
  }
}
