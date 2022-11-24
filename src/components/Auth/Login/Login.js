import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postLoginThunk } from '../../../state/thunks/auth.thunk';
import { changePageThunk } from '../../../state/thunks/page.thunk';
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
        <img
          src="https://image.shutterstock.com/image-vector/male-profile-picture-avatar-600w-147777698.jpg"
          width={45}
          height={45}
          alt="profile"
        ></img>
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
      console.log('obj', obj);
      const response = await postLoginThunk(obj);
      console.log('response SEND', response);
      if (response?.status !== 500) {
        // handleChangePage(4);
      }
    }
  };

  const renderLogin = () => {
    return (
      <div className="login-wrapper">
        <div className="login">Log in</div>

        <div className="email">
          <input
            type="email"
            placeholder="Username"
            value={data.username.value}
            name={'username'}
            onChange={handleChange}
          ></input>
          <div>{data.username.error}</div>
        </div>

        <div className="password">
          <input
            type="pass"
            placeholder="Password"
            value={data.password.value}
            name={'password'}
            onChange={handleChange}
          ></input>
          <div>{data.password.error}</div>
        </div>

        <div className="login-group">
          <div className="remember-me">Remember me</div>
          <div onClick={() => handleChangePage(3)} className="forgot-password">
            Forgot Password?
          </div>
        </div>

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
