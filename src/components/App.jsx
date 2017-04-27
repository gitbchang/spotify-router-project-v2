import React, { Component } from 'react';

export default class SpotifyLogin extends Component {
  render() {
    // injected via react router
    const {children} = this.props;
    return (
      <div className="spotify-login">
        <h1>Example Spotify + React + React-Router Login Flow</h1>
        <div className="page-content">
          <p>This is an example of the Authorization Code flow using routes.</p>
          {children}
        </div>
      </div>
    );
  }
}
