import { AppState } from './app/types';

export interface RootState {
  readonly app: AppState;
}

export type PartialRootStore = Partial<RootState>;
