import React, { Component } from "react";
import Header from "./components/Header";
import "./css/Styles.css";
import WeatherCard from "./components/WeatherCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main_container">
          <WeatherCard />
        </section>
      </div>
    );
  }
}

export default App;
