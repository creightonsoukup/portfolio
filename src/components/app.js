import React, { Component } from 'react';
import Logo from './logo';
import Homepage from './homepage'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: true
    }
  }


  render() {
    const loader = _.debounce(() => {this.setState({showLoader: false})}, 3000)
    loader()
    return (
      <div className='landing-page'>
        { this.state.showLoader &&
          <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={1500}>
            <Logo/>
          </CSSTransitionGroup>
        }
        <Homepage/>
      </div>
    );
  }
}
