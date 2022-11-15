import React from 'react';
import { connect } from 'react-redux';
import Danger from '../../utils/Icons/Danger';
import Email from '../../utils/Icons/Email';
import Square from '../../utils/Icons/Square';
import Header from '../Header/Header';

import './Settings.css';

const Settings = ({ ...props }) => {
  const mockData = [
    {
      id: 1,
      svg: <Email></Email>,
      text: 'Color blind mode',
    },
    {
      id: 2,
      svg: <Danger></Danger>,
      text: 'Show danger percentage',
    },
    {
      id: 3,
      svg: <Square></Square>,
      text: 'Debug mode',
    },
    {
      id: 4,
      svg: <Square></Square>,
      text: 'Another setting',
    },
  ];

  return (
    <>
      <Header></Header>
      <h1>Settings</h1>
      <div className="settings-group">
        <div className="container">
          {mockData.map((item, index) => (
            <div key={index} className="settings-row">
              <div className="svg">{item.svg}</div>
              {item.text}
              <div className="toggle">
                <input type="checkbox" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
