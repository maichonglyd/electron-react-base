/*
 * @Author: li
 * @Date: 2018-04-16 16:52:30
 * @Last Modified by: li
 * @Last Modified time: 2019-07-01 15:05:49
 */

// @flow

import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from '../sagas/';
// import problemReducer from '../redux/problem';

function createStore() {
  const rootReducer = combineReducers({
    // problem: problemReducer
  });

  return configureStore(rootReducer, rootSaga);
}

const store = createStore();

export default store;
