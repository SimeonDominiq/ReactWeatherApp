import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_left_section">
          <h4>Open Weather App</h4>
        </div>
        <h3>Today</h3>
      </header>
    );
  }
}

export default Header;
