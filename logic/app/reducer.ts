import { HYDRATE } from 'next-redux-wrapper';
import { createReducer } from 'reduxsauce';
import { ReduxWrapperHydrateAction } from 'logic/types';
import { SetInitializedAction, SetMountedAction } from './types';
import { AppTypes } from './actions';
import { appInitialState } from './initialState';

export const appReducer = createReducer(appInitialState, {
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
});
