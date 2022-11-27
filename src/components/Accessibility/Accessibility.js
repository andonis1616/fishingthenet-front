import React, { useEffect } from "react";
import { connect } from "react-redux";
import useLocalStorage from "use-local-storage";
import { switchThemeThunk } from "../../state/thunks/theme.thunk";
import Eye from "../../utils/Icons/Eye";
import Keyboard from "../../utils/Icons/Keyboard";
import Moon from "../../utils/Icons/Moon";
import Header from "../Header/Header";

import "./Accessibility.css";

const Accessibility = ({ switchThemeState, switchThemeThunk, ...props }) => {
  const [checked, setChecked] = React.useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    switchThemeState === "dark" && setChecked(true);
  }, []);

  const switchTheme = () => {
    setChecked(!checked);
    const newTheme = switchThemeState === "light" ? "dark" : "light";
    setTheme(newTheme);
    switchThemeThunk(newTheme);
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
            Dark mode
            <div className="toggle">
              <input
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
            Color blind mode
            <div className="toggle">
              <input type="checkbox" />
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

const mapStateToProps = (state) => ({
  switchThemeState: state.switchThemeState.switchTheme,
});

const mapDispatchToProps = {
  switchThemeThunk: switchThemeThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessibility);
