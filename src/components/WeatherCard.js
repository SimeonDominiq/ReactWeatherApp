import React, { Component } from "react";
import WeatherView from "./WeatherView";
import sampleData from "../json_test_data/sampleWeatherData";

class WeatherCard extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: sampleData
    };
  }

  render() {
    const WeatherComponent = this.state.weatherData.map(data => {
      return <WeatherView key={data.id} weatherdata={data} />;
    });
    return <div className="main_container">{WeatherComponent}</div>;
  }
}

export default WeatherCard;
