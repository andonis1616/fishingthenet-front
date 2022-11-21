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
    setShowMenu(!showMenu);
  };

  const handleChangePage = pageNumber => {
    changePageThunk(pageNumber);
  };

  /**
   * Render
   */

  const renderArrowLeftIcon = () => (
    <div className="nav-left-back" onClick={() => handleChangePage(4)}>
      <ArrowLeft></ArrowLeft>
    </div>
  );

  const renderBurger = () => (
    <div className="nav-left-burger" onClick={() => handleShowMenu()}>
      <Burger></Burger>
    </div>
  );

  const renderShowMenu = () => (
    <div className="menu">
      <div className="menu-row" onClick={() => handleChangePage(5)}>
        <div className="svg">
          <Man></Man>
        </div>
        Accessibility
      </div>
      <div className="menu-row" onClick={() => handleChangePage(6)}>
        <div className="svg">
          <Money></Money>
        </div>
        Pricing plans
      </div>
      <div className="menu-row" onClick={() => handleChangePage(7)}>
        <div className="svg">
          <Settings></Settings>
        </div>
        Settings
      </div>
    </div>
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
    <div className="nav-right" onClick={() => handleChangePage(8)}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></img>
    </div>
  );

  return (
    <div className="container">
      <div className="nav">
        <div className="nav-left">
          {changePage > 4 && renderArrowLeftIcon()}

          {changePage !== 8 && renderBurger()}

          {showMenu && renderShowMenu()}
        </div>
        {changePage !== 8 && renderDate()}
        {changePage !== 8 && renderProfileImage()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
