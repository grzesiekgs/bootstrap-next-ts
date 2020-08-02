import { Action } from 'redux';

export interface AppState {
  initialized: boolean;
  mounted: boolean;
}

export interface AppActionsTypes {
  SET_INITIALIZED: string;
  SET_MOUNTED: string;
}

export interface SetInitializedAction extends Action<'SET_INITIALIZED'> {
  initialized: AppState['initialized'];
}

export interface SetMountedAction extends Action<'SET_MOUNTED'> {
  mounted: AppState['mounted'];
}

export interface AppActionsCreators {
  setInitialized: (initialized: AppState['initialized']) => SetInitializedAction;
  setMounted: (mounted: AppState['mounted']) => SetMountedAction;
}
