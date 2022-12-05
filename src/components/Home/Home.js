import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sword from "../../utils/Icons/Sword";
import Header from "../Header/Header";
import jwt_decode from "jwt-decode";
import "./Home.css";
import Scut from "../../utils/Icons/Scut";
import { homeThunk } from "../../state/thunks/home.thunk";

const Home = ({ sendEmail, home, homeThunk, ...props }) => {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  useEffect(() => {
    //apeleaza api home
    homeThunk();

    let circularProgress = document.querySelector(".circular-progress"),
      progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
      progressEndValue = 1, //schimbat
      speed = 15;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(var(--clr-blue-light) ${
        progressStartValue * 3.6
      }deg, var(--clr-white) 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);

  useEffect(() => {
    let circularProgress = document.querySelector(".circular-progress"),
      progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
      progressEndValue =
        home.percentage === 0 || home.percentage === undefined
          ? 1
          : home.percentage, //schimbat
      speed = 15;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(var(--clr-blue-light) ${
        progressStartValue * 3.6
      }deg, var(--clr-white) 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, [home]);

  useEffect(() => {
    console.log("Home sendEmail !!!!!!!!!!!!!!!!!!!!!", sendEmail);
  }, [sendEmail]);

  const renderCircular = () => {
    return (
      <section className="circular-progress-container">
        <div className="circular-progress">
          <span className="progress-value">0%</span>
        </div>
        <div className="circular-progress-text">
          <p>Protection percentage</p>
          <p>at the moment</p>
        </div>
      </section>
    );
  };

  const renderAttacksFrequent = () => {
    return (
      <div className="attacks-frequent">
        <Sword></Sword>
        <div className="frequent">
          <div className="attacks-frequent-text">
            Most frequent attack source
          </div>
          <div className="attacks-frequent-number">
            {home.mostfrequentCountry}
          </div>
        </div>
      </div>
    );
  };
  const renderAttacksNumbers = () => {
    return (
      <div className="attacks-numbers">
        <div className="numbers">
          <div className="attacks-numbers-text">Number of attempts</div>
          <div className="attacks-numbers-number">
            {home.numberOfFishingEmails}
          </div>
        </div>
        <Scut></Scut>
      </div>
    );
  };

  return (
    <>
      <Header></Header>

      <h1 className="home-title">Hi, {decoded.sub}</h1>

      <div className="container-home">
        {renderAttacksFrequent()}
        {renderAttacksNumbers()}

        <section className="chart">chart</section>

        <section className="map">map</section>

        {renderCircular()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  home: state?.homeState?.home,
  sendEmail: state.homeState.sendEmail,
});

const mapDispatchToProps = {
  homeThunk: homeThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
