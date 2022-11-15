import { combineReducers } from 'redux';

import { skillsReducer } from './reducers/page.reducers';

export const rootReducers = combineReducers({
  skillsState: skillsReducer,
});
