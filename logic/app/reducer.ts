import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, Handlers } from 'reduxsauce';
import { ReduxWrapperHydrateAction } from 'logic/types';
import { AppState, SetInitializedAction, SetMountedAction } from './types';
import { AppTypes } from './actions';
import { appInitialState } from './initialState';

const HANDLERS: Handlers<AppState> = {
  [HYDRATE]: (state, { type: _type, payload }: ReduxWrapperHydrateAction) => ({
    ...state,
    ...payload.app
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
