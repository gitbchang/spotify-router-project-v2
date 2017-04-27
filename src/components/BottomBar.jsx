import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';



class BottomBar extends Component {
  render() {
    return (
      <StickyContainer>
        <Sticky> 
          <h3 className='text-center' style={{color: 'white'}}>B.Chang</h3>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default BottomBar;