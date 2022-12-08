import { CHANGE_PAGE, HR_FETCH_SKILLS, FISHH } from "../actions/page.action";

const initialState = {
  // skillsCategory: {},
  changePage: localStorage.getItem("token") ? 4 : 2,
  fishh: false,
};

export const pageReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    /**
     * Change Page
     */
    // case HR_FETCH_SKILLS:
    //   console.log('action.payload', action.payload);
    //   return {
    //     ...state,
    //     skillsCategory: action.payload,
    //   };

    case CHANGE_PAGE:
      // console.log("11111111111111", {
      //   ...state,
      //   changePage: action.payload,
      // });
      return {
        ...state,
        changePage: action.payload,
      };

    case FISHH:
      // console.log("action.payload 11", action.payload);
      return {
        ...state,
        fishh: action.payload,
      };

    default:
      return { ...state };
  }
};
