import React, { Component } from "react";
import AppLogo from "../images/forest.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_left_section">
          <img src={AppLogo} />
          <h4>Open Weather App</h4>
        </div>
        <h3>Today</h3>
      </header>
    );
  }
}

export default Header;
