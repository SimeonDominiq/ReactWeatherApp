import React, { Component } from "react";
import temp_min_svg from "../images/temp_min_svg.svg";
import temp_max_svg from "../images/temp_max_svg.svg";

class WeatherCard extends Component {
  render() {
    return (
      <div className="weather_card">
        <span className="city_name_text">London</span>
        <div className="weather_icon_container">Icon</div>
        <div className="temperature_text_container">
          <span className="temperature_text">23</span>
          <span className="temperature_metric_text">°</span>
          <span className="temp_weather_condition">Sunny</span>
        </div>

        <div className="temp_min_max_container">
          <div className="min_container">
            <img src={temp_min_svg} alt="Min Svg" />
            <span className="min_temp_text">12</span>
            <span className="min_text">Min</span>
          </div>

          <div className="max_container">
            <img src={temp_max_svg} alt="Max Svg" />
            <span className="max_temp_text">12</span>
            <span className="max_text">Max</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
