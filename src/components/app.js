import React, { Component } from 'react';
import Logo from './logo';
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash';

export default class App extends Component {

  render() {
    return (
      <div className='landing-page'>
        <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={1500}
        >
          <Logo/>
        </CSSTransitionGroup>
      </div>
    );
  }
}
