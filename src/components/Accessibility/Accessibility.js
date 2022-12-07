import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useLocalStorage from 'use-local-storage';
import { switchThemeThunk } from '../../state/thunks/theme.thunk';
import Eye from '../../utils/Icons/Eye';
import Keyboard from '../../utils/Icons/Keyboard';
import Moon from '../../utils/Icons/Moon';
import Header from '../Header/Header';

import './Accessibility.css';

const Accessibility = ({ switchThemeState, switchThemeThunk, ...props }) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedBlind, setCheckedBlind] = React.useState(false);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultBlind = window.matchMedia('(prefers-color-scheme: blind)')
    .matches;
  // console.log('defaultDark', defaultDark);
  // console.log('defaultBlind', defaultBlind);
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : defaultBlind ? 'blind' : 'light',
  );

  useEffect(() => {
    // console.log('switchThemeState', switchThemeState);
    switchThemeState === 'dark' && setChecked(true);
    switchThemeState === 'blind' && setCheckedBlind(true);
  }, []);

  const switchTheme = () => {
    setCheckedBlind(false);
    setChecked(!checked);
    const newTheme = !checked ? 'dark' : 'light';
    setTheme(newTheme);
    switchThemeThunk(newTheme);
  };

  const switchThemeToBlind = () => {
    // console.log('checkedBlind', checkedBlind);
    setChecked(false);
    setCheckedBlind(!checkedBlind);
    const newThemeBlind = !checkedBlind ? 'blind' : 'light';
    setTheme(newThemeBlind);
    switchThemeThunk(newThemeBlind);
  };

  return (
    <>
      <Header></Header>
      <h1>Accessibility</h1>
      <div className="accessibility-group">
        <div className="container">
          <div className="accessibility-row">
            <div className="svg">
              <Moon fill="var(--clr-black)"></Moon>
            </div>
            <p aria-label="Dark mode">Dark mode</p>
            <div className="toggle">
              <input
                aria-label="checkbox for dark mode"
                className="checkbox-dark-mode"
                type="checkbox"
                checked={checked}
                onChange={switchTheme}
              />
            </div>
          </div>

          <div className="accessibility-row">
            <div className="svg">
              <Eye fill="var(--clr-black)"></Eye>
            </div>
            <p aria-label="Color blind mode">Color blind mode</p>
            <div className="toggle">
              <input
                aria-label="checkbox for Color blind mode"
                type="checkbox"
                checked={checkedBlind}
                onChange={switchThemeToBlind}
              />
            </div>
          </div>

          <div className="accessibility-row">
            <div className="svg">
              <Keyboard fill="var(--clr-black)"></Keyboard>
            </div>
            Text speech setting
            {/* <div className="toggle">toggle</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  switchThemeState: state.switchThemeState.switchTheme,
});

const mapDispatchToProps = {
  switchThemeThunk: switchThemeThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessibility);
