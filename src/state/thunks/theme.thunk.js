// import axios from 'axios';

import { switchThemeAction } from '../actions/theme.action';

/**
 * Theme
 */

export const switchThemeThunk = page => async dispatch => {
  dispatch(switchThemeAction(page));
};
