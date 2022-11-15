import React from 'react';
import { connect } from 'react-redux';
import Eye from '../../utils/Icons/Eye';
import Keyboard from '../../utils/Icons/Keyboard';
import Moon from '../../utils/Icons/Moon';
import Header from '../Header/Header';

import './Accessibility.css';

const Accessibility = ({ ...props }) => {
  return (
    <>
      <Header></Header>
      <h1>Accessibility</h1>
      <div className="accessibility-group">
        <div className="container">
          <div className="accessibility-row">
            <div className="svg">
              <Moon></Moon>
            </div>
            Dark mode
            <div className="toggle">
              <input type="checkbox" />
            </div>
          </div>

          <div className="accessibility-row">
            <div className="svg">
              <Eye></Eye>
            </div>
            Color blind mode
            <div className="toggle">
              <input type="checkbox" />
            </div>
          </div>

          <div className="accessibility-row">
            <div className="svg">
              <Keyboard></Keyboard>
            </div>
            Text speech setting
            {/* <div className="toggle">toggle</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Accessibility);
