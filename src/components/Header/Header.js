import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../state/thunks/page.thunk';
import ArrowLeft from '../../utils/Icons/ArrowLeft';
import Burger from '../../utils/Icons/Burger';
import Man from '../../utils/Icons/Man';
import Money from '../../utils/Icons/Money';
import Settings from '../../utils/Icons/Settings';

import './Header.css';

const Header = ({ changePage, changePageThunk, ...props }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    const hamb = document.getElementById('hamburger');
    if (hamb.getAttribute('aria-expanded') == 'false') {
      hamb.setAttribute('aria-expanded', 'true');
    } else {
      hamb.setAttribute('aria-expanded', 'false');
    }
    setShowMenu(!showMenu);
  };

  const handleChangePage = pageNumber => {
    changePageThunk(pageNumber);
  };

  /**
   * Render
   */

  const renderArrowLeftIcon = () => (
    <button
      aria-label="Back to Home"
      className="nav-left-back"
      onClick={() => handleChangePage(4)}
    >
      <ArrowLeft fill="var(--clr-black)"></ArrowLeft>
    </button>
  );

  const renderBurger = () => (
    <button
      aria-label="Menu"
      className="nav-left-burger"
      id="hamburger"
      aria-expanded="false"
      onClick={() => handleShowMenu()}
    >
      <Burger fill="var(--clr-black)"></Burger>
    </button>
  );

  const renderShowMenu = () => (
    <ul className="menu">
      <li className="menu-row" onClick={() => handleChangePage(5)}>
        <div aria-current="page" className="svg">
          <Man fill="var(--clr-black)"></Man>
        </div>
        <a href="javascript:void(0)">Accessibility</a>
      </li>
      <li className="menu-row" onClick={() => handleChangePage(6)}>
        <div className="svg">
          <Money fill="var(--clr-black)"></Money>
        </div>
        <a href="javascript:void(0)">Pricing plans</a>
      </li>
      <li className="menu-row" onClick={() => handleChangePage(7)}>
        <div className="svg">
          <Settings fill="var(--clr-black)"></Settings>
        </div>
        <a href="javascript:void(0)">Settings</a>
      </li>
    </ul>
  );

  const renderDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return <div className="nav-mid">{today}</div>;
  };

  const renderProfileImage = () => (
    <button
      aria-label="Profile"
      id="profile"
      className="nav-right"
      onClick={() => handleChangePage(8)}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></img>
    </button>
  );

  return (
    <div className="container">
      <nav className="nav" id="nav" aria-label="Main">
        <div className="nav-left">
          {changePage > 4 && renderArrowLeftIcon()}

          {changePage !== 8 && renderBurger()}

          {showMenu && renderShowMenu()}
        </div>
        {changePage !== 8 && renderDate()}
        {changePage !== 8 && renderProfileImage()}
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
