// import api from 'src/common/services/api-call.service';
import { homeAction, sendEmailAction } from "../actions/home.action";
// import axios from 'axios';

/**
 * Home
 */
export const homeThunk = () => async (dispatch) => {
  return await fetch("http://localhost:8080/api/home/user?debug=true")
    .then((response) => response.json())
    .then((response) => {
      // console.log('response', response);
      dispatch(homeAction(response));
    })
    .catch((err) => console.log(err));
};

export const sendEmailThunk = (sendData) => async (dispatch) => {
  return await fetch("http://localhost:8080/api/email/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(sendData),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch(sendEmailAction(response));
      return response;
    })
    .catch((err) => console.log(err));
};
