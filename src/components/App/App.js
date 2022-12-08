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
// const optiunePagina = 2;
var k = 0;

const App = ({
  sendEmail,
  changePage,
  switchThemeState,
  switchThemeThunk,
  sendEmailThunk,
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
  const [showAlert, setShowAlert] = useLocalStorage("showAlert", false);

  var token = localStorage.getItem("token");

  // const switchTheme = () => {
  //   const newTheme = switchThemeState === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   switchThemeThunk(newTheme);
  // };

  useEffect(() => {
    switchThemeThunk(theme);
  }, []);

  useEffect(() => {
    // console.log('sendEmailsendEmailsendEmailsendEmailsendEmail', sendEmail);
  }, [sendEmail]);

  // console.log(
  //   'aaaaaaaaaaaaa',
  //   document.querySelector('[data-app-section="MailReadCompose"]'),
  // );

  // function logInnerText(elem) {
  //   if (elem.nodeType === Node.TEXT_NODE && elem.nodeValue.trim())
  //     console.log(elem.nodeValue.trim())
  //   elem.childNodes.length && elem.childNodes.forEach(el => logInnerText(el))
  // }

  // logInnerText(document.querySelector('[data-app-section="MailReadCompose"]'))

  const FUNCTIA_MARE = async () => {
    console.log("CLICKKKKKKKKKKKKKKKK 1");
    // Compensate for IE<9's non-standard event model
    //
    // if (event === undefined) event = window.event;
    // var target = 'target' in event ? event.target : event.srcElement;

    // alert('clicked on ' + target.tagName);

    // console.log('target@@@@@@@@@@@@@@@@@@@@@@@', target);
    const TEST = async () => {
      // console.log(
      //   "CLICK AICIIIIIII",
      //   document.querySelector('[data-app-section="MailReadCompose"]')
      // );

      // Get data from browser

      const dataArray = [];
      var title = "";
      var email = "";
      var count = 0;

      function logInnerText(elem, index = undefined) {
        if (elem.nodeType === Node.TEXT_NODE && elem.nodeValue.trim()) {
          count = count + 1;

          const string = elem.nodeValue.trim();
          const regex = /\<(.*?(@).*?)\>/;

          if (count === 1) title = elem.nodeValue.trim();
          if (count <= 20 && string.match(regex)) {
            email = elem.nodeValue.trim();
          }

          return dataArray.push(elem.nodeValue.trim());
        }

        elem.childNodes.length &&
          elem.childNodes.forEach((el, index) => logInnerText(el, index));
      }

      logInnerText(
        document.querySelector('[data-app-section="MailReadCompose"]')
      );

      var decoded = jwt_decode(token);

      const SendDataToBE = {
        subject: title,
        sender: email,
        content: dataArray.toString(" "),
        ownerUsername: decoded.sub,
      };
      console.log("SendDataToBE 111111111111111", SendDataToBE);

      const res = await sendEmailThunk(SendDataToBE);
      if (res) k++;
      // console.log(k);
      console.log("ressssssssssssssss 1", res);
      // if (res && res.isFishing === true && k === 1)
      //   alert(`Phishing email detected ${res.sender}`);

      if (res && res.isFishing === true && k === 1) {
        setShowAlert(true);
        localStorage.setItem("showAlert", "true");
      }

      if (res && res.isFishing === true) {
        setShowAlert(true);
        localStorage.setItem("showAlert", "true");
      }

      // end get data
    };
    window.setTimeout(TEST, 3000);
  };

  // var elementDOM = document.querySelector("body");
  var elementDOM = document.querySelector('[role="complementary"]');

  if (elementDOM) {
    elementDOM.addEventListener("click", (e) => {
      console.log("ROLE element clicked 1", e);
      FUNCTIA_MARE();
    });
  }

  const renderComponent = (option) => {
    switch (option) {
      case 1:
        return <Login />;

      case 2:
        return <Register />;

      case 3:
        return <ForgotPassword />;

      case 4:
        return <Home />;

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
      {showAlert === true && (
        <section className="custom-alert">
          <div className="alert-svg">
            <CAlert></CAlert>
          </div>
          <p>{`Phishing email detected `}</p>
          <div onClick={() => setShowAlert(false)}>
            <X></X>
          </div>
        </section>
      )}
      <Bottom></Bottom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  changePage: state?.pageState?.changePage,
  switchThemeState: state.switchThemeState.switchTheme,
  sendEmail: state.homeState.sendEmail,
});

const mapDispatchToProps = {
  switchThemeThunk: switchThemeThunk,
  sendEmailThunk: sendEmailThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
