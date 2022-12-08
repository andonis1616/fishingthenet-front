import { SWITCH_THEME } from "../actions/theme.action";

const initialState = {
  switchTheme: "light",
};

export const switchTheme = (state = { ...initialState }, action) => {
  switch (action.type) {
    /**
     * Theme
     */

    case SWITCH_THEME:
      return {
        ...state,
        switchTheme: action.payload,
      };

    default:
      return { ...state };
  }
};
