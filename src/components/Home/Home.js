import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

import './Home.css';

const Home = ({ ...props }) => {
  useEffect(() => {
    let circularProgress = document.querySelector('.circular-progress'),
      progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0,
      progressEndValue = 90,
      speed = 15;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#18A0FB ${progressStartValue *
        3.6}deg,#F5F5F5 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);

  return (
    <>
      <Header></Header>

      <div className="container-home">
        <section className="circular-progress">
          <span className="progress-value">0%</span>
        </section>

        <section className="attacks">
          <div className="attacks-frequent">
            <div className="attacks-frequent-text">
              Most frequent attack source
            </div>
            <div className="attacks-frequent-number">Russia</div>
          </div>
          <div className="attacks-numbers">
            <div className="attacks-numbers-text">Number of attempts</div>
            <div className="attacks-numbers-number">170.000</div>
          </div>
        </section>

        <section className="chart">chart</section>

        <section className="map">map</section>
      </div>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
