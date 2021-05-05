import { Action } from 'redux';
import { AppState } from './app/types';

export interface RootState {
  readonly app: AppState;
}
// '__NEXT_REDUX_WRAPPER_HYDRATE__' is value of import { HYDRATE } from 'next-redux-wrapper'
export interface ReduxWrapperHydrateAction extends Action<'__NEXT_REDUX_WRAPPER_HYDRATE__'> {
  payload: Partial<RootState>;
}
