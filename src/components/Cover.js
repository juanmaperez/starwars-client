import React from 'react';
import { CoverWrapper } from './../styled-components/Cover'

export default () => (
  <CoverWrapper>
    <div className="leia">
      <div className="head">
        <div className="fringe"></div>
        <div className="fringe"></div>
        <div>
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div>
          <div className="blush"></div>
          <div className="blush"></div>
        </div>      
        <div className="mouth"></div>
      </div>
    </div>
    <div className="welcome">Welcome to Start Wars</div> 
  </CoverWrapper>
)