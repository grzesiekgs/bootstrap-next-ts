import { createReducer, Handlers } from 'reduxsauce';
import { AppTypes } from './actions';
import { appInitialState } from './initialState';
import { AppState, SetInitializedAction, SetMountedAction } from './types';

const HANDLERS: Handlers<AppState, SetInitializedAction & SetMountedAction> = {
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
