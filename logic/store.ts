import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from './app/reducer';
import { initialState } from './initialState';
import rootSaga from './rootSaga';
import { RootState } from './types';

const composeEnhancers = composeWithDevTools({});

export const initializeStore = (state: RootState = initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<RootState>({
      app: appReducer
    } as any),
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
