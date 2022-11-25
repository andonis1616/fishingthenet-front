import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../state/thunks/page.thunk';
import Edit from '../../utils/Icons/Edit';
import LogOut from '../../utils/Icons/LogOut';
import Man from '../../utils/Icons/Man';
import Money from '../../utils/Icons/Money';
import Settings from '../../utils/Icons/Settings';
import Header from '../Header/Header';

import './Profile.css';

const Profile = ({ changePage, changePageThunk, ...props }) => {
  const handleEdit = () => {
    console.log('handleEdit');
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    handleChangePage(1);
  };

  const handleChangePage = pageNumber => {
    changePageThunk(pageNumber);
  };

  const renderProfileInfo = () => (
    <section className="profile-info">
      <div className="profile-img-edit">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
          alt="profile image"
          width={80}
          height={80}
        ></img>
        <div className="edit-svg" onClick={() => handleEdit()}>
          <Edit />
        </div>
      </div>

      <div className="profile-name">Name name</div>

      <div className="profile-email">myPersonalEmail@yahoo.com</div>
    </section>
  );

  const renderMenu = () => (
    <section className="menu-profile">
      <div className="container-profile">
        <div className="menu-profile-row" onClick={() => handleChangePage(5)}>
          <div className="svg">
            <Man></Man>
          </div>
          Accessibility
        </div>
        <div className="menu-profile-row" onClick={() => handleChangePage(6)}>
          <div className="svg">
            <Money></Money>
          </div>
          Pricing plans
        </div>
        <div className="menu-profile-row" onClick={() => handleChangePage(7)}>
          <div className="svg">
            <Settings></Settings>
          </div>
          Settings
        </div>
      </div>
    </section>
  );
  return (
    <>
      <Header></Header>

      {renderProfileInfo()}
      {renderMenu()}

      <hr className="hr"></hr>

      <div className="log-out" onClick={() => handleLogOut()}>
        Log Out
        <div className="svg">
          <LogOut />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
