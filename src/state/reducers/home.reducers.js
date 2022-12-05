import { FETCH_HOME, POST_SEND_EMAIL } from "../actions/home.action";

const initialState = {
  home: {},
  sendEmail: {},
};

export const homeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    /**
     * HOME
     */
    case FETCH_HOME:
      return {
        ...state,
        home: action.payload,
      };

    case POST_SEND_EMAIL:
      console.log("REDUCERRRRRRRRRRRRRRRRRR action.payload", action.payload);
      const data = action.payload;
      console.log("REDUCER data ", data);
      return {
        ...state,
        sendEmail: { ...data },
      };

    default:
      return { ...state };
  }
};
