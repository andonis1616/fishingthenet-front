import { combineReducers } from 'redux';

import { homeReducer } from './reducers/home.reducers';
import { pageReducer } from './reducers/page.reducers';
import { switchTheme } from './reducers/theme.reducers';

export const rootReducers = combineReducers({
  homeState: homeReducer,
  pageState: pageReducer,
  switchThemeState: switchTheme,
});
