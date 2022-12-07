import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import useLocalStorage from 'use-local-storage';
import Danger from '../../utils/Icons/Danger';
import Email from '../../utils/Icons/Email';
import Square from '../../utils/Icons/Square';
import Header from '../Header/Header';

import './Settings.css';

const Settings = ({ ...props }) => {
  const [checkedE, setCheckedE] = React.useState(false);
  const [checkedShowPercentage, setCheckedShowPercentage] = React.useState(
    true,
  );
  const [checkedDebug, setCheckedDebug] = React.useState(true);

  const [debug, setDebug] = useLocalStorage('debug', true);
  const [showPercentage, setShowPercentage] = useLocalStorage(
    'showPercentage',
    true,
  );

  useEffect(() => {
    setCheckedShowPercentage(showPercentage ? true : false);
    setCheckedDebug(debug ? true : false);
  }, []);

  const handleShowPercentage = () => {
    console.log('showPercentage', showPercentage);
    setCheckedShowPercentage(!showPercentage);
    setShowPercentage(!showPercentage);
  };
  const handleDebug = () => {
    console.log('debug', debug);
    setCheckedDebug(!debug);
    setDebug(!debug);
  };

  return (
    <>
      <Header></Header>
      <h1>Settings</h1>
      <div className="settings-group">
        <div className="container">
          <div className="settings-row">
            <div className="svg">
              <Email></Email>
            </div>
            <span>Display alerts in Outlook</span>
            <div className="toggle">
              <input
                aria-label="checkbox for Display alerts in Outlook"
                type="checkbox"
                checked={checkedE}
              />
            </div>
          </div>

          <div className="settings-row">
            <div className="svg">
              <Danger></Danger>
            </div>
            <span>Show danger percentage</span>
            <div className="toggle">
              <input
                aria-label="checkbox for Show danger percentage"
                type="checkbox"
                checked={checkedShowPercentage}
                onChange={handleShowPercentage}
              />
            </div>
          </div>

          <div className="settings-row">
            <div className="svg">
              <Square></Square>
            </div>
            <span>Debug mode</span>
            <div className="toggle">
              <input
                aria-label="checkbox for Debug mode"
                type="checkbox"
                checked={checkedDebug}
                onChange={handleDebug}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
