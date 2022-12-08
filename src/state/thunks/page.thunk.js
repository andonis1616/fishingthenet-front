// import api from 'src/common/services/api-call.service';
import {
  changePageAction,
  fetchSkillsCategory,
  fishhAction,
} from "../actions/page.action";
// import axios from 'axios';

/**
 * Change Page
 */
// export const fetchSkillsCategoryThunk = () => async dispatch => {
//   return await api('get', `skill/category/`)
//     .then(response => {
//       return dispatch(fetchSkillsCategory(response.data));
//     })
//     .catch(err => console.log('err', err));
// };

// export const fetchSkillsCategoryThunk = () => async dispatch => {
//   console.log('THUNK');
//   return await fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(response => {
//       console.log('response', response);
//       dispatch(fetchSkillsCategory(response));
//     })
//     .catch(err => console.log(err));
// };

export const changePageThunk = (page) => async (dispatch) => {
  dispatch(changePageAction(page));
};

export const fishhThunk = (fishh) => async (dispatch) => {
  // console.log("THUNK fishh 1", fishh);
  dispatch(fishhAction(fishh));
};
