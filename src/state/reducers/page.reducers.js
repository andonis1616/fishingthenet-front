import { CHANGE_PAGE, HR_FETCH_SKILLS } from '../actions/page.action';

const initialState = {
  skillsCategory: {},
  changePage: 2,
};

export const skillsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    /**
     * Skills Category
     */
    case HR_FETCH_SKILLS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        skillsCategory: action.payload,
      };

    case CHANGE_PAGE:
      console.log('action.payload', action.payload);
      return {
        ...state,
        changePage: action.payload,
      };

    default:
      return { ...state };
  }
};
