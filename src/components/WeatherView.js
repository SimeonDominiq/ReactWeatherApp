import React from "react";
import CardHeaderSvg from "../images/details_card_svg.svg";

function WeatherView(props) {
  return (
    <div className="details_page_wrapper">
      <div className="details_card_wrapper">
        <div className="details_card_header">
          <img src={CardHeaderSvg} className="card_illustration" />
          <div className="card_header_content">
            <div className="today_weather_container">
              <div className="temp_state_container">
                <span className="temp_text">
                  {props.LoadForecast.forecast.list[0].main.temp.toFixed()}°
                </span>
                <span className="weatherStateText">CLOUDY</span>
              </div>

              <div className="humid_wind_container">
                <div className="hum_container">
                  <span className="hum_text">Humidity</span>
                  <span className="hum_value_text">65%</span>
                </div>
                <div className="hum_wind_separator">&nbsp;</div>
                <div className="wind_container">
                  <span className="wind_text">Wind</span>
                  <span className="wind_value_text"> K/M</span>
                </div>
              </div>
            </div>
            <div className="city_name_container">
              <div className="city_name_underline">
                <span className="city_name_text">
                  {!props.LoadForecast.isLoading
                    ? `${props.LoadForecast.forecast.city.name}, ${
                        props.LoadForecast.forecast.city.country
                      }`
                    : ""}
                </span>
              </div>
            </div>
            {/*end of cit name container*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherView;
