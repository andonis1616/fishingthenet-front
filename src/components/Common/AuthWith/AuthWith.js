import React from "react";
import { connect } from "react-redux";
import { changePageThunk } from "../../../state/thunks/page.thunk";
import GitHubIcon from "../../../utils/Icons/GitHubIcon";
import GoogleIcon from "../../../utils/Icons/GoogleIcon";
import "./AuthWith.css";

const AuthWith = ({
  skillsCategory,
  changePage,
  changePageThunk,
  ...props
}) => {
  const { question, questionLink } = props;

  const handleChangePage = (pageNumber) => {
    changePageThunk(pageNumber);
  };

  return (
    <div className="auth-with">
      <button aria-label="Continue with Google" className="auth-with-group">
        <GoogleIcon></GoogleIcon>
        <span className="text">Continue with Google</span>
      </button>

      <button aria-label="Continue with GitHub" className="auth-with-group">
        <GitHubIcon fill="var(--clr-black)"></GitHubIcon>
        <span className="text">Continue with GitHub</span>
      </button>

      <div className="auth-with-group-text">
        <span className="auth-with-text">{question}</span>
        <a
          href="javascript:void(0)"
          className="auth-with-link"
          onClick={() =>
            questionLink === "Log in"
              ? handleChangePage(1)
              : handleChangePage(2)
          }
        >
          {questionLink}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthWith);
