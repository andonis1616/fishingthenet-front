/**
 * Change Page
 */
export const postRegisterThunk = data => async dispatch => {
  console.log('THUNK postRegisterThunk', data);
  console.log('THUNK postRegisterThunk', JSON.stringify(data));
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
  console.log('THUNK postLoginThunk', JSON.stringify(data));

  return await fetch('http://localhost:8080/login', {
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
