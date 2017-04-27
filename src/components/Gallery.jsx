import React, { Component } from 'react';
import { connect }      from 'react-redux';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
// Pull the Albums into an array of objects
const albumData = [];
/*
{tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}

*/

class Gallery extends Component {
  render() {
    return (
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>Albums</Subheader>
            
          </GridList>
      </div>
      <a href="/spotifyApi"><RaisedButton label="Find Songs" primary={true} style={{margin: 12}} /></a>
    </div>
    );
  }
}

export default connect(state => state.user)(Gallery);