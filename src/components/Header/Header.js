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
    console.log('menu');
    setShowMenu(!showMenu);
  };

  const handleChangePage = pageNumber => {
    console.log('pageNumber', pageNumber);
    changePageThunk(pageNumber);
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="nav-left">
          {changePage > 4 && (
            <div className="nav-left-back" onClick={() => handleChangePage(4)}>
              <ArrowLeft></ArrowLeft>
            </div>
          )}
          <div onClick={() => handleShowMenu()}>
            <Burger></Burger>
          </div>
          {showMenu && (
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
          )}
        </div>
        <div className="nav-mid">12/11/2022</div>
        <div className="nav-right">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></img>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
