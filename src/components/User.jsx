import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect }      from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';
import {
  getMyInfo,
  setTokens,
}   from '../actions/';

import RaisedButton from 'material-ui/RaisedButton';

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

/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props;
    const {accessToken, refreshToken} = params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMyInfo());
  }

  /** Render the user's info */
  render() {
    const { accessToken, refreshToken, user } = this.props;
    const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    const imageUrl = images[0] ? images[0].url : "";
    // if we're still loading, indicate such
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="user">
        <h2>{`Logged in as ${display_name}`}</h2>
        <div className="user-content">
          <img src={imageUrl} />
          <ul>
            <li><span>Display name_</span><span>{display_name}</span></li>
            <li><span>Id_</span><span>{id}</span></li>
            <li><span>Email_</span><span>{email}</span></li>
            <li><span>Spotify URI_</span><span><a href={external_urls.spotify}>{external_urls.spotify}</a></span></li>
            <li><span>Link_</span><span><a href={href}>{href}</a></span></li>
            <li><span>Profile Image_</span><span><a href={imageUrl}>{imageUrl}</a></span></li>
            <li><span>Country_</span><span>{country}</span></li>
            <li><span>Product_</span><span>{product}</span></li>
          </ul>
        </div>
        <RaisedButton label="Go to Search" primary={true} style={{margin: 12}}
          onClick={() => browserHistory.push('/search')}
         />
      </div>
    );
  }
}


export default connect(state => state)(User);
// export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect(state => {user: state.user})(User);
