import React from "react";
import { connect } from "react-redux";
import { changePageThunk } from "../../state/thunks/page.thunk";
import Edit from "../../utils/Icons/Edit";
import LogOut from "../../utils/Icons/LogOut";
import Man from "../../utils/Icons/Man";
import Money from "../../utils/Icons/Money";
import Settings from "../../utils/Icons/Settings";
import Header from "../Header/Header";
import jwt_decode from "jwt-decode";

import "./Profile.css";

const Profile = ({ changePage, changePageThunk, ...props }) => {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  const handleEdit = () => {
    console.log("handleEdit");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    handleChangePage(1);
  };

  const handleChangePage = (pageNumber) => {
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
          <Edit fill="var(--clr-black)" />
        </div>
      </div>

      <div className="profile-name">{decoded.sub}</div>

      <div className="profile-email">myPersonalEmail@yahoo.com</div>
    </section>
  );

  const renderMenu = () => (
    <section className="menu-profile">
      <div className="container-profile">
        <div className="menu-profile-row" onClick={() => handleChangePage(5)}>
          <div className="svg">
            <Man fill="var(--clr-black)"></Man>
          </div>
          Accessibility
        </div>
        <div className="menu-profile-row" onClick={() => handleChangePage(6)}>
          <div className="svg">
            <Money fill="var(--clr-black)"></Money>
          </div>
          Pricing plans
        </div>
        <div className="menu-profile-row" onClick={() => handleChangePage(7)}>
          <div className="svg">
            <Settings fill="var(--clr-black)"></Settings>
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
          <LogOut fill="var(--clr-black)" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  changePage: state?.pageState?.changePage,
});

const mapDispatchToProps = {
  changePageThunk: changePageThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
