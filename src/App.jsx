/*
 * @Author: li
 * @Date: Mon Apr 16 2018
 * @Last Modified by: li
 * @Last Modified time: 2019-07-01 15:07:08
 */

// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import CSSTransitionGroup from './components/CSSTransitionGroup';
import HomePage from './pages/HomePage';

type Props = {
  location: Object;
};

class App extends Component<Props> {

  render() {
    const { location } = this.props;
    return (
      <CSSTransitionGroup transitionName="page" location={location}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            component={() => (<Redirect to="/" />)}
          />
        </Switch>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(App);
