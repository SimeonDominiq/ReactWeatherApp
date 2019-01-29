import React, { Component } from "react";
import Header from "./components/Header";
import "./css/Styles.css";
import WeatherDetails from "./components/WeatherDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherDetails />
      </div>
    );
  }
}

export default App;
