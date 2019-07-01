import { takeLatest } from 'redux-saga/effects';
import launchSaga from './launch';

// 当action触发时，执行特定saga
export default function* root() {
  yield [
    takeLatest('LAUNCH', launchSaga)
  ];
}
