import { all, fork } from 'redux-saga/effects';
import { appSaga } from 'logic/app/saga';

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
