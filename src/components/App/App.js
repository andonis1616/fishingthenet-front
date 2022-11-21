import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Accessibility from '../Accessibility/Accessibility';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Home from '../Home/Home';
import PricingPlans from '../PricingPlans/PricingPlans';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import './App.css';
import '../../utils/Variables/variables.css';
import useLocalStorage from 'use-local-storage';
import { switchThemeThunk } from '../../state/thunks/theme.thunk';
// const optiunePagina = 2;

const App = ({ changePage, switchThemeState, switchThemeThunk, ...props }) => {
  console.log('changePage!!!!!!!!!!!!!!!111111', changePage);
  console.log('switchThemeState!!!!!!!!!!!!!!!111111', switchThemeState);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  );

  // const switchTheme = () => {
  //   const newTheme = switchThemeState === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   switchThemeThunk(newTheme);
  // };

  useEffect(() => {
    switchThemeThunk(theme);
  }, []);
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

  const FUNCTIA_MARE = () => {
    console.log('CLICKKKKKKKKKKKKKKKK');
    // Compensate for IE<9's non-standard event model
    //
    // if (event === undefined) event = window.event;
    // var target = 'target' in event ? event.target : event.srcElement;

    // alert('clicked on ' + target.tagName);

    // console.log('target@@@@@@@@@@@@@@@@@@@@@@@', target);
    const TEST = () => {
      console.log(
        'CLICK AICIIIIIII',
        document.querySelector('[data-app-section="MailReadCompose"]'),
      );

      // Get data from browser

      const dataArray = [];
      var title = '';
      var email = '';
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
        document.querySelector('[data-app-section="MailReadCompose"]'),
      );

      const SendDataToBE = {
        title,
        email,
        content: dataArray.toString(' '),
      };
      console.log('SendDataToBE!!!!!!!!!!!!', SendDataToBE);
      // end get data
    };
    window.setTimeout(TEST, 3000);
  };

  var elementDOM = document.querySelector('[role="complementary"]');
  if (elementDOM)
    elementDOM.addEventListener('click', e => {
      console.log('ROLE element clicked!!!!!!!!!!!!!!!!!!!!!!!!!!', e);
      FUNCTIA_MARE();
    });

  const renderComponent = option => {
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
    </div>
  );
};

const mapStateToProps = state => ({
  changePage: state?.skillsState?.changePage,
  switchThemeState: state.switchThemeState.switchTheme,
});

const mapDispatchToProps = {
  switchThemeThunk: switchThemeThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
