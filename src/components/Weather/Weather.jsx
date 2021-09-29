import React, { useEffect, useState } from "react";
import * as S from "./Weather.style";
import { API_WEATHER } from "../../constants/apiKey";
import { LS_COORDS } from "../../constants/localStorage";

const Weather = () => {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const coords = localStorage.getItem(LS_COORDS);

    if (coords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(coords);
      const latitude = parseCoords.latitude;
      const longitude = parseCoords.longitude;

      getWeather(latitude, longitude);
    }
  }, []);

  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handelGeoSuccess, handelGeoError);
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

  function saveCoords(coordsObj) {
    localStorage.setItem(LS_COORDS, JSON.stringify(coordsObj));
  }

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

  return (
    <S.WeatherContainer>
      <S.Temperature>{temperature}</S.Temperature>
      <S.Description>{description}</S.Description>
      <S.Location>{location}</S.Location>
    </S.WeatherContainer>
  );
};

export default Weather;
