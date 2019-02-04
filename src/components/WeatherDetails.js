import React, { Component } from "react";
import Geocode from "react-geocode";
import WeatherView from "./WeatherView";
import LoaderView from "./LoaderView";

Geocode.setApiKey(process.env.GOOGLE_API_KEY);

const API_KEY = process.env.FORECAST_API,
  RESULT_LIMIT = 5,
  RESULT_UNIT = "metric";

class WeatherDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      cur_lat: "",
      cur_long: "",
      cur_address: "",
      cur_state: "",
      forecast: {}
    };
  }

  componentDidMount() {
    var currentComponent = this;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          // for when getting location is a success
          currentComponent.setState({
            cur_lat: position.coords.latitude,
            cur_long: position.coords.longitude
          });

          currentComponent.getWeather(
            currentComponent.state.cur_lat,
            currentComponent.state.cur_long
          );
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      console.log("Error");
    }
  }

  getWeather = (lat, long) => {
    // Get address from latidude & longitude.
    Geocode.fromLatLng(lat, long).then(
      response => {
        const address = response.results[0].formatted_address,
          current_state = this.getCurrentState(address);
        console.log(address, current_state);
        this.setState({
          cur_state: current_state
        });

        //Fetch Weather Forecast for current State
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${
            this.state.cur_state
          },NG&cnt=${RESULT_LIMIT}&appid=${API_KEY}&units=${RESULT_UNIT}`
        )
          .then(response => response.json())
          .then(data => {
            console.log(data, this.state.cur_lat, this.state.cur_long);
            this.setState({
              isLoading: false,
              forecast: data
            });
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.error(error);
      }
    );
  };

  getCurrentState = address => {
    let city = "";
    city = address
      .split(",")
      .slice(-2, -1)
      .join();
    return city;
  };

  render() {
    return this.state.isLoading ? (
      <LoaderView />
    ) : (
      <WeatherView LoadForecast={this.state} />
    );
  }
}

export default WeatherDetails;
