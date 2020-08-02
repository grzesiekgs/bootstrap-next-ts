import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, Handlers } from 'reduxsauce';
import { ReduxWrapperHydrateAction } from '../types';
import { AppTypes } from './actions';
import { appInitialState } from './initialState';
import { AppState, SetInitializedAction, SetMountedAction } from './types';

const HANDLERS: Handlers<AppState> = {
  [HYDRATE]: (state, { type: _type, ...partialState }: ReduxWrapperHydrateAction) => ({
    ...state,
    ...partialState
  }),
  [AppTypes.SET_INITIALIZED]: (state, action: SetInitializedAction) => ({
    ...state,
    initialized: action.initialized
  }),
  [AppTypes.SET_MOUNTED]: (state, action: SetMountedAction) => ({
    ...state,
    mounted: action.mounted
  })
};

export const appReducer = createReducer(appInitialState, HANDLERS);
