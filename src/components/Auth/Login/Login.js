import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../../state/thunks/page.thunk';
import AuthWith from '../../Common/AuthWith/AuthWith';
import './Login.css';

const Login = ({ changePage, changePageThunk, ...props }) => {
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

  const renderLogin = () => {
    return (
      <div className="login-wrapper">
        <div className="login">Log in</div>

        <div className="email">
          <input placeholder="Email address"></input>
        </div>

        <div className="password">
          <input placeholder="Password"></input>
        </div>

        <div className="login-group">
          <div className="remember-me">Remember me</div>
          <div onClick={() => handleChangePage(3)} className="forgot-password">
            Forgot Password?
          </div>
        </div>

        <button onClick={() => handleChangePage(4)} className="login-btn">
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
  changePage: state?.skillsState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
