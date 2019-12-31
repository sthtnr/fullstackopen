import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capitalName }) => {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current\?access_key\=${API_KEY}\&query\=${capitalName}`
      )
      .then(res => {
        setWeatherData(res.data.current);
      });
  }, []);

  return (
    <div>
      <h3>Weather in {capitalName}</h3>
      <h4>temperature: {weatherData.temperature}</h4>
      <img src={weatherData.weather_icons} alt="" />
      <h4>
        wind: (speed){weatherData.wind_speed}km/h (direction)
        {weatherData.wind_dir}
      </h4>
    </div>
  );
};

export default Weather;
