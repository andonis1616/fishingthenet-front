import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../../state/thunks/page.thunk';
import GitHubIcon from '../../../utils/Icons/GitHubIcon';
import GoogleIcon from '../../../utils/Icons/GoogleIcon';
import './AuthWith.css';

const AuthWith = ({
  skillsCategory,
  changePage,
  changePageThunk,
  ...props
}) => {
  const { question, questionLink } = props;

  const handleChangePage = pageNumber => {
    console.log('pageNumber', pageNumber);
    changePageThunk(pageNumber);
  };

  return (
    <div className="auth-with">
      <div className="auth-with-group">
        <GoogleIcon></GoogleIcon>
        <div className="text">Continue with Google</div>
      </div>

      <div className="auth-with-group">
        <GitHubIcon></GitHubIcon>
        <div className="text">Continue with GitHub</div>
      </div>

      <div className="auth-with-group-text">
        <div className="auth-with-text">{question}</div>
        <div
          className="auth-with-link"
          onClick={() =>
            questionLink === 'Log in'
              ? handleChangePage(1)
              : handleChangePage(2)
          }
        >
          {questionLink}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  changePage: state?.skillsState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthWith);
