import { CHANGE_PAGE, HR_FETCH_SKILLS } from '../actions/page.action';

const initialState = {
  // skillsCategory: {},
  changePage: localStorage.getItem('token') ? 4 : 2,
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
      return {
        ...state,
        changePage: action.payload,
      };

    default:
      return { ...state };
  }
};
