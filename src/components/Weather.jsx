import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_WEATHER } from "../constants/apiKey";
import { LS_COORDS } from "../constants/localStorage";

const Weather = () => {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_WEATHER}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setTemperature(`${Math.floor(json.main.temp)}°C`);
        setDescription(json.weather[0].description);
        setLocation(json.name);
      });
  }

  function saveCoords(coordsObj) {
    localStorage.setItem(LS_COORDS, JSON.stringify(coordsObj));
  }

  function handelGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handelGeoError() {
    console.log("Can't get current position");
  }

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handelGeoSuccess, handelGeoError);
  }

  function loadCoords() {
    const loadedCoords = localStorage.getItem(LS_COORDS);

    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCoords);
      const latitude = parseCoords.latitude;
      const longitude = parseCoords.longitude;

      getWeather(latitude, longitude);
    }
  }

  useEffect(() => {
    const loadedCoords = localStorage.getItem(LS_COORDS);

    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCoords);
      const latitude = parseCoords.latitude;
      const longitude = parseCoords.longitude;

      getWeather(latitude, longitude);
    }
  }, []);

  return (
    <WeatherContainer>
      <Temperature>{temperature}</Temperature>
      <Description>{description}</Description>
      <Location>{location}</Location>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 11px 20px 10px 10px;
  text-align: right;
  cursor: default;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const Temperature = styled.span`
  font-size: 1.625rem;
  font-weight: 400;
`;

const Description = styled.span`
  opacity: 0.85;
  font-size: 0.8125rem;
  line-height: 1.2;
`;

const Location = styled.span`
  opacity: 0.85;
  font-size: 0.8125rem;
  line-height: 1.2;
`;

export default Weather;
