import jwt from 'jwt-decode';

/**
 * Change Page
 */
export const postRegisterThunk = data => async dispatch => {
  console.log('THUNK postRegisterThunk', data);
  console.log('THUNK postRegisterThunk22', JSON.stringify(data));
  return await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      console.log('response', response);
      // dispatch(fetchSkillsCategory(response));
      return response;
    })
    .catch(err => console.log(err));
};

export const postLoginThunk = data => async dispatch => {
  console.log('THUNK postLoginThunk', data);
  console.log('THUNK postLoginThunk2', JSON.stringify(data));

  return await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      console.log('response', response);
      const token = response.access_token;
      const user = jwt(token); // decode your token here
      console.log('user', user);
      localStorage.setItem('token', token);
      localStorage.setItem('debug', true);
      localStorage.setItem('showPercentage', true);
      // dispatch(fetchSkillsCategory(response));
      return user;
    })
    .catch(err => console.log(err));
};
