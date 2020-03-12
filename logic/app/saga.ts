import { put, takeLatest } from 'redux-saga/effects';
import { AppActions, AppTypes } from './actions';
import { SetInitializedAction } from './types';

export function* initializeApp({ initialized }: SetInitializedAction) {
  yield put(AppActions.setMounted(initialized));
}

export function* appSaga() {
  yield takeLatest<SetInitializedAction>(AppTypes.SET_INITIALIZED, initializeApp);
}
