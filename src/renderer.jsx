/*
 * @Author: li
 * @Date: 2018-04-16 16:50:59
 * @Last Modified by: li
 * @Last Modified time: 2018-04-17 13:29:29
 */

// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import App from './App';
// $Flow
import '../scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  // $Flow
  , document.getElementById('app')
);
