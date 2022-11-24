import { combineReducers } from 'redux';

import { pageReducer } from './reducers/page.reducers';
import { switchTheme } from './reducers/theme.reducers';

export const rootReducers = combineReducers({
  pageState: pageReducer,
  switchThemeState: switchTheme,
});
