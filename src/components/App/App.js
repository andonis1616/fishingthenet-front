import React from 'react';
import { connect } from 'react-redux';
import Accessibility from '../Accessibility/Accessibility';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Home from '../Home/Home';
import PricingPlans from '../PricingPlans/PricingPlans';
import Settings from '../Settings/Settings';
import './App.css';

// const optiunePagina = 2;

const App = ({ changePage, ...props }) => {
  console.log('changePage!!!!!!!!!!!!!!!', changePage);
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

      default:
        return <>E GATA</>;
    }
  };

  return <div className="app">{renderComponent(changePage)}</div>;
};

const mapStateToProps = state => ({
  changePage: state?.skillsState?.changePage,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
