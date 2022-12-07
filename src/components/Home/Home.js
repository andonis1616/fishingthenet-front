import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Sword from '../../utils/Icons/Sword';
import Header from '../Header/Header';
import jwt_decode from 'jwt-decode';
import { Bar } from 'react-chartjs-2';
import './Home.css';
import Scut from '../../utils/Icons/Scut';
import { fetchChartThunk, homeThunk } from '../../state/thunks/home.thunk';
import { Chart as ChartJS } from 'chart.js/auto';
import moment from 'moment/moment';

const firstDayOfWeek = 1;

const Home = ({
  chart,
  sendEmail,
  home,
  homeThunk,
  fetchChartThunk,
  ...props
}) => {
  var token = localStorage.getItem('token');
  var decoded = jwt_decode(token);
  ////
  // const dates = [
  // '2022-12-01',
  // '2022-12-02',
  // '2022-12-03',
  // '2022-12-04',
  // '2022-12-05',
  // '2022-12-06',
  // '2022-12-07',
  // '2022-12-08',
  // '2022-12-09',
  // '2022-12-10',
  // ];
  // const datapoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const [dates, setDates] = useState([]);
  // const [datapoints, setDatapoints] = useState([]);

  const [data, setData] = useState({
    labels: [
      // '2022-12-01',
      // '2022-12-02',
      // '2022-12-03',
      // '2022-12-04',
      // '2022-12-05',
      // '2022-12-06',
      // '2022-12-07',
      // '2022-12-08',
      // '2022-12-09',
      // '2022-12-10',
    ],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [],
        backgroundColor: ['red', 'green'],
        borderColor: ['red', 'green'],
        borderWidth: 1,
      },
    ],
  });
  ////

  useEffect(() => {
    //apeleaza api home
    homeThunk();
    //apelez sa iau date din graf
    fetchChartThunk(decoded.sub, 'LAST_WEEK');

    let circularProgress = document.querySelector('.circular-progress'),
      progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0,
      progressEndValue = 1, //schimbat
      speed = 15;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(var(--clr-blue-light) ${progressStartValue *
        3.6}deg, var(--clr-white) 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);

  //////pt chart
  useEffect(() => {
    // console.log('dataaaaaaaaa', data);
    if (Object.keys(chart).length) {
      const labelsArr = chart?.chartData?.map(item => item.timestamp);
      // console.log('chart', chart);
      // console.log('labelsArr', labelsArr);
      setData({
        ...data,
        labels: labelsArr,
        datasets: [
          {
            label: 'Weekly Sales',
            data: chart?.chartData?.map(item => item.numberOfEmails),
            backgroundColor: ['#6F8BC6', '#000000'],
            borderColor: ['#6F8BC6', '#000000'],
            borderWidth: 1,
          },
        ],
      });
    }
    // console.log('RAU TAREEEEEEEEEEEEEEEEE', {
    //   ...data,
    //   labels: chart?.chartData?.map(item => item.timestamp),
    //   datasets: [
    //     {
    //       label: 'Weekly Sales',
    //       data: chart?.chartData?.map(item => item.numberOfEmails),
    //       backgroundColor: ['red', 'green'],
    //       borderColor: ['red', 'green'],
    //       borderWidth: 1,
    //     },
    //   ],
    // });
  }, [chart]);

  useEffect(() => {
    let circularProgress = document.querySelector('.circular-progress'),
      progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0,
      progressEndValue =
        home.percentage === 0 || home.percentage === undefined
          ? 1
          : home.percentage, //schimbat
      speed = 15;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(var(--clr-blue-light) ${progressStartValue *
        3.6}deg, var(--clr-white) 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, [home]);

  useEffect(() => {
    // console.log('Home sendEmail !!!!!!!!!!!!!!!!!!!!!', sendEmail);
  }, [sendEmail]);

  const renderCircular = () => {
    let hide = '';
    if (localStorage.getItem('showPercentage') !== 'true')
      hide = 'circular-progress-container-hide';

    return (
      <section className={`circular-progress-container ${hide}`}>
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
          <p className="attacks-frequent-text">Most frequent attack source</p>
          <p className="attacks-frequent-number">{home.mostfrequentCountry}</p>
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

  const renderChart = () => {
    // console.log('0000000000000000000', data);
    return (
      <div className="attacks-chart">
        <Bar data={data}></Bar>
      </div>
    );
  };

  const handleShortcutClick = type => () => {
    const now = new Date();
    const first = now.getDate() - now.getDay() + firstDayOfWeek;
    let from, to;

    switch (type) {
      case 'thisWeek':
        //apelez sa iau date din graf
        fetchChartThunk(decoded.sub, 'LAST_WEEK');
        var curr = new Date();
        var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
        var lastday = new Date(
          curr.setDate(curr.getDate() - curr.getDay() + 6),
        );

        from = firstday.toISOString().substring(0, 10);
        to = lastday.toISOString().substring(0, 10);
        break;

      case 'lastWeek':
        fetchChartThunk(decoded.sub, 'LAST_WEEK');

        to = moment(new Date() - 7 * 24 * 3600 * 1000).format('YYYY-MM-DD');
        from = moment(new Date()).format('YYYY-MM-DD');

        break;

      case 'lastMonth':
        fetchChartThunk(decoded.sub, 'LAST_MONTH');

        from = moment()
          .subtract(1, 'month')
          .format('YYYY-MM-DD');
        to = moment(new Date()).format('YYYY-MM-DD');

        break;

      case 'lastYear':
        fetchChartThunk(decoded.sub, 'LAST_YEAR');

        from = moment()
          .subtract(1, 'year')
          .format('YYYY-MM-DD');
        to = moment(new Date()).format('YYYY-MM-DD');
        break;
      default:
        return;
    }
    // console.log('aaaaaaaaaaaaaaaaaaaaa', from);
    // console.log('aaaaaaaaaaaaaaaaaaaaa', to);

    filterData(from, to);
  };
  const TEST = () => {
    // console.log('fdsafdsa', document.getElementById('startdate'));
  };
  const filterData = (from, to) => {
    const dates2 = [...data.labels];

    const startdate = from;
    const enddate = to;
    // console.log('startdate', startdate);
    // console.log('enddate', enddate);

    //get the index number in array
    const indexstartdate = dates2.indexOf(startdate);
    const indexenddate = dates2.indexOf(enddate);
    // console.log('dates2', dates2);
    // console.log('indexstartdate', indexstartdate);
    // console.log('indexenddate', indexenddate);

    //slice the array only showing the selected section / alice
    const filterDate = dates2.slice(indexstartdate, indexenddate + 1);
    // console.log('dddddddddddddddd', filterDate);

    /////////////////////
    const datapoints2 = [...data.datasets[0].data];
    const filterDatapoints = datapoints2.slice(
      indexstartdate,
      indexenddate + 1,
    );

    /////////////////////
    setData({
      ...data,
      labels: filterDate,
      datasets: [
        {
          ...data.datasets[0],
          data: filterDatapoints,
        },
      ],
    });

    // myChart.config.data.labels = filterDate;
    // myChart.update();
  };

  return (
    <>
      <Header></Header>

      <h1 className="home-title">Hi, {decoded.sub}</h1>

      <div className="container-home">
        {renderAttacksFrequent()}
        {renderAttacksNumbers()}

        <button
          className="btn-chart"
          type="button"
          onClick={handleShortcutClick('lastWeek')}
        >
          last Week
        </button>
        <button
          className="btn-chart"
          type="button"
          onClick={handleShortcutClick('lastMonth')}
        >
          last month
        </button>
        <button
          className="btn-chart"
          type="button"
          onClick={handleShortcutClick('lastYear')}
        >
          last year
        </button>

        {renderChart()}

        {/* <input onchange="TEST()" type="date" id="startdate"></input> */}

        {/* <button type="button" onClick={handleShortcutClick('thisWeek')}>
          This week
        </button> */}

        {/* <section className="map">map</section> */}

        {renderCircular()}
        {/* {localStorage.getItem('showPercentage') && renderCircular()} */}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  home: state?.homeState?.home,
  chart: state?.homeState?.chart,
  sendEmail: state.homeState.sendEmail,
});

const mapDispatchToProps = {
  homeThunk: homeThunk,
  fetchChartThunk: fetchChartThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
