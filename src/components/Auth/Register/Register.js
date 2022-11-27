import React, { useState } from "react";
import { connect } from "react-redux";
import { postRegisterThunk } from "../../../state/thunks/auth.thunk";
import { changePageThunk } from "../../../state/thunks/page.thunk";
import Fish from "../../../utils/Icons/Fish";
import AuthWith from "../../Common/AuthWith/AuthWith";
import "./Register.css";

const initialData = {
  name: {
    value: "",
    error: "",
    isError: false,
  },
  username: {
    value: "",
    error: "",
    isError: false,
  },
  email: {
    value: "",
    error: "",
    isError: false,
  },
  password: {
    value: "",
    error: "",
    isError: false,
  },
};

const Register = ({
  changePage,
  changePageThunk,
  postRegisterThunk,
  ...props
}) => {
  const [data, setData] = useState(initialData);

  const renderProfile = () => (
    <div className="profile">
      {/* <img src={Fish} width={45} height={45} alt="profile"></img> */}
      <Fish></Fish>
    </div>
  );

  const handleChangePage = (pageNumber) => {
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
        error: "",
        isError: false,
      },
    });
  };

  const checkIfExistErrors = () => {
    let isError = false;
    let dataCopy = { ...data };

    if (!dataCopy.name.value) {
      dataCopy.name.error = "This Field is Required";
      dataCopy.name.isError = true;
      isError = true;
    }
    if (!dataCopy.username.value) {
      dataCopy.username.error = "This Field is Required";
      dataCopy.username.isError = true;
      isError = true;
    }
    if (!dataCopy.email.value) {
      dataCopy.email.error = "This Field is Required";
      dataCopy.email.isError = true;
      isError = true;
    }
    if (!dataCopy.password.value) {
      dataCopy.password.error = "This Field is Required";
      dataCopy.password.isError = true;
      isError = true;
    }
    if (isError) {
      setData(dataCopy);
    }
    return isError;
  };

  const sendDataToBE = async () => {
    if (!checkIfExistErrors()) {
      const obj = {
        name: data.name.value,
        username: data.username.value,
        email: data.email.value,
        password: data.password.value,
      };
      const response = await postRegisterThunk(obj);
      console.log("response SEND", response);
      if (response && response?.status !== 500) {
        handleChangePage(1);
      }
    }
  };

  const renderRegister = () => {
    return (
      <div className="register-wrapper">
        <div className="register">Sign up</div>

        <div className="firstname">
          <input
            type="text"
            placeholder="First name"
            value={data.name.value}
            name={"name"}
            onChange={handleChange}
          ></input>
          <div className="error-msg">{data.name.error}</div>
        </div>

        <div className="lastname">
          <input
            type="text"
            placeholder="Last name"
            value={data.username.value}
            name={"username"}
            onChange={handleChange}
          ></input>
          <div className="error-msg">{data.username.error}</div>
        </div>

        <div className="email">
          <input
            type="email"
            placeholder="Email address"
            value={data.email.value}
            name={"email"}
            onChange={handleChange}
          ></input>
          <div className="error-msg">{data.email.error}</div>
        </div>

        <div className="password">
          <input
            type="pass"
            placeholder="Create password"
            value={data.password.value}
            name={"password"}
            onChange={handleChange}
          ></input>
          <div className="error-msg">{data.password.error}</div>
        </div>

        <button onClick={sendDataToBE} className="register-btn">
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

const mapStateToProps = (state) => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
  postRegisterThunk: postRegisterThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
