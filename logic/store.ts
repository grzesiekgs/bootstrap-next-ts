import { useMemo } from 'react';
import { applyMiddleware, combineReducers, createStore, Store, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from './app/reducer';
import rootSaga from './rootSaga';
import { PartialRootStore, RootState } from './types';

let store: Store | null = null;
const composeEnhancers = composeWithDevTools({});

const bindMiddleware = (middlewares: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

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

// 888888888888888888888888888888
