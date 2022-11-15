import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../../state/thunks/page.thunk';
import AuthWith from '../../Common/AuthWith/AuthWith';
import './Register.css';

const Register = ({
  skillsCategory,
  changePage,
  changePageThunk,
  ...props
}) => {
  React.useEffect(() => {
    // fetchSkillsCategoryThunk();
  }, []);

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
    console.log('pageNumber', pageNumber);
    changePageThunk(pageNumber);
  };

  const renderRegister = () => {
    return (
      <div className="register-wrapper">
        <div className="register">Sign up</div>

        <div className="firstname">
          <input type="text" placeholder="First name"></input>
        </div>

        <div className="lastname">
          <input type="text" placeholder="Last name"></input>
        </div>

        <div className="email">
          <input type="email" placeholder="Email address"></input>
        </div>

        <div className="password">
          <input type="pass" placeholder="Create password"></input>
        </div>

        <button onClick={() => handleChangePage(1)} className="register-btn">
          Sign up
        </button>
      </div>
    );
  };

  return (
    <div className="container-register">
      {renderProfile()}

      {renderRegister()}

      <div className="or">or</div>

      <AuthWith
        question="Do you already have an account?"
        questionLink="Log in"
      ></AuthWith>
    </div>
  );
};

const mapStateToProps = state => ({
  // skillsCategory: state?.skillsState?.skillsCategory,
  changePage: state?.skillsState?.changePage,
});

const mapDispatchToProps = {
  // fetchSkillsCategoryThunk: fetchSkillsCategoryThunk,
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
