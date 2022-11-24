import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../../state/thunks/page.thunk';
import AuthWith from '../../Common/AuthWith/AuthWith';
import './ForgotPassword.css';

const ForgotPassword = ({ changePage, changePageThunk, ...props }) => {
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

  const renderForgotPassword = () => {
    return (
      <div className="forgot-password-wrapper">
        <div className="forgot-password">Forgot your Password?</div>
        <p>Enter your email and we’ll send you a link to reset your password</p>

        <div className="email">
          <input placeholder="Email address"></input>
        </div>

        <button
          onClick={() => handleChangePage(1)}
          className="forgot-password-btn"
        >
          Submit
        </button>
      </div>
    );
  };

  const handleChangePage = pageNumber => {
    console.log('pageNumber', pageNumber);
    changePageThunk(pageNumber);
  };

  return (
    <div className="container-forgot">
      {renderProfile()}

      {renderForgotPassword()}

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
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
