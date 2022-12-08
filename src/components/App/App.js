import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Accessibility from "../Accessibility/Accessibility";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Home from "../Home/Home";
import PricingPlans from "../PricingPlans/PricingPlans";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import jwt_decode from "jwt-decode";
import "./App.css";
import "../../utils/Variables/variables.css";
import useLocalStorage from "use-local-storage";
import { switchThemeThunk } from "../../state/thunks/theme.thunk";
import Bottom from "../Bottom/Bottom";
import { sendEmailThunk } from "../../state/thunks/home.thunk";
import CAlert from "../../utils/Icons/CAlert";
import X from "../../utils/Icons/X";
import { fishhThunk } from "../../state/thunks/page.thunk";
// const optiunePagina = 2;
var k = 0;

const App = ({
  sendEmail,
  changePage,
  switchThemeState,
  switchThemeThunk,
  sendEmailThunk,
  fishhThunk,
  fishh,
  ...props
}) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultBlind = window.matchMedia(
    "(prefers-color-scheme: blind)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : defaultBlind ? "blind" : "light"
  );

  const [testATT, setTestATT] = useState(false);

  var token = localStorage.getItem("token");

  useEffect(() => {
    switchThemeThunk(theme);
  }, []);

  const renderComponent = (option) => {
    switch (option) {
      case 1:
        return <Login />;

      case 2:
        return <Register />;

      case 3:
        return <ForgotPassword />;

      case 4:
        return <Home setTestATT={setTestATT} />;

      case 5:
        return <Accessibility />;

      case 6:
        return <PricingPlans />;

      case 7:
        return <Settings />;

      case 8:
        return <Profile />;

      default:
        return <>E GATA</>;
    }
  };

  return (
    <div className="app" data-theme={switchThemeState}>
      {renderComponent(changePage)}
      {console.log(
        "testATTtestATTtestATTtestATTtestATTtestATTtestATTTTTTTTT!!!!!!!!!!!!!!!!!!!!!!",
        testATT
      )}
      <Bottom></Bottom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  changePage: state?.pageState?.changePage,
  switchThemeState: state.switchThemeState.switchTheme,
  sendEmail: state.homeState.sendEmail,
  fishh: state.pageState.fishh,
});

const mapDispatchToProps = {
  switchThemeThunk: switchThemeThunk,
  sendEmailThunk: sendEmailThunk,
  fishhThunk: fishhThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
