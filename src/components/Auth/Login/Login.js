import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postLoginThunk } from '../../../state/thunks/auth.thunk';
import { changePageThunk } from '../../../state/thunks/page.thunk';
import Fish from '../../../utils/Icons/Fish';
import AuthWith from '../../Common/AuthWith/AuthWith';
import './Login.css';

const initialData = {
  username: {
    value: '',
    error: '',
    isError: false,
  },
  password: {
    value: '',
    error: '',
    isError: false,
  },
};

const Login = ({ changePage, changePageThunk, postLoginThunk, ...props }) => {
  const [data, setData] = useState(initialData);

  const renderProfile = () => {
    return (
      <div className="profile">
        <Fish></Fish>
      </div>
    );
  };

  const handleChangePage = pageNumber => {
    changePageThunk(pageNumber);
  };

  const handleChange = (e, p) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setData({
      ...data,
      [inputName]: {
        ...data[inputName],
        value: inputValue,
        error: '',
        isError: false,
      },
    });
  };

  const checkIfExistErrors = () => {
    let isError = false;
    let dataCopy = { ...data };

    if (!dataCopy.username.value) {
      dataCopy.username.error = 'This Field is Required';
      dataCopy.username.isError = true;
      isError = true;
    }
    if (!dataCopy.password.value) {
      dataCopy.password.error = 'This Field is Required';
      dataCopy.password.isError = true;
      isError = true;
    }
    if (isError) {
      setData(dataCopy);
    }
    return isError;
  };

  const login = async () => {
    if (!checkIfExistErrors()) {
      const obj = {
        username: data.username.value,
        password: data.password.value,
      };
      // console.log('obj', obj);
      const response = await postLoginThunk(obj);
      // console.log('response SEND', response);
      if (response !== undefined) {
        handleChangePage(4);
      }
    }
  };

  const renderLogin = () => {
    return (
      <div className="login-wrapper">
        <h1 className="login">Log in</h1>
        <fieldset>
          <label htmlFor="username" className="email">
            <input
              aria-label="Enter your username"
              type="email"
              placeholder="Username"
              value={data.username.value}
              name={'username'}
              onChange={handleChange}
            ></input>
            <div className="error-msg">{data.username.error}</div>
          </label>

          <label htmlFor="password" className="password">
            <input
              aria-label="Enter your password"
              id="password"
              type="pass"
              placeholder="Password"
              value={data.password.value}
              name={'password'}
              onChange={handleChange}
            ></input>
            <div className="error-msg">{data.password.error}</div>
          </label>

          {/* <div className="login-group">
            <div className="remember-me"></div>
            <div
              onClick={() => handleChangePage(3)}
              className="htmlForgot-password"
            >
              htmlForgot Password?
            </div>
          </div> */}
        </fieldset>
        <button onClick={login} className="login-btn">
          Log in
        </button>
      </div>
    );
  };

  return (
    <div className="container-login">
      {renderProfile()}

      {renderLogin()}

      <div className="or">or</div>

      <AuthWith
        question="Do you need an account?"
        questionLink="Sign up"
      ></AuthWith>
    </div>
  );
};

const mapStateToProps = state => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
  postLoginThunk: postLoginThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
