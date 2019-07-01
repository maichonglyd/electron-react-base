/*
 * @Author: li
 * @Date: Wed Apr 18 2018
 * @Last Modified by: li
 * @Last Modified time: 2019-03-22 10:46:40
 */

// @flow

import React, { Component } from 'react';
// $Flow
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

type Props = {
  transitionName: string,
  location: Object,
  children: any
};

export default class CSSTransitionGroup extends Component<Props> {
  render() {
    const { children, location } = this.props;
    return (
      <div className="app-block">
        <ReactCSSTransitionGroup
          component="div"
          className="app-content"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionName="page"
        >
          {
            React.cloneElement(children, {
              key: location.pathname,
              location,
            })
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
