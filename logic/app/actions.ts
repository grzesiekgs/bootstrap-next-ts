import { createActions } from 'reduxsauce';
import { AppActionsCreators, AppActionsTypes } from './types';

export const { Types: AppTypes, Creators: AppActions } = createActions<AppActionsTypes, AppActionsCreators>(
  {
    setInitialized: ['initialized'],
    setMounted: ['mounted']
  },
  { prefix: 'APP_' }
);
