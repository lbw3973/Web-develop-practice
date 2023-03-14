import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { GEOLOCATION, GRADE } from "../constants/weather";
import { weatherReducer } from "../reducers/weatherReducers";

function Weather() {
  const [state, dispatch] = useReducer(weatherReducer, { isLoading: false, data: null, error: null });
  // const [state, setState] = useState({ isLoading: false, data: null, error: null });

  const getWeather = async (location) => {
    const { latitude, longitude } = GEOLOCATION[location];
    const reponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
    );
    return reponse.data;
  };

  const setWeatherByResponse = async (location) => {
    try {
      dispatch({ type: "LOADING" });
      const data = await getWeather(location);
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    setWeatherByResponse("서울");
  }, []);

  if (state.isLoading) return <>로딩 중...</>;
  else if (state.error) return <>에러</>;
  return (
    <div>
      <h1>현재 날씨</h1>
      <p>지역 : {state.data && state.data.timezone}</p>
      <p>기준 시간: {state.data && state.data.current_weather.time}</p>
      <p>
        온도 : {state.data && state.data.current_weather.temperature}{" "}
        {state.data && GRADE[state.data.current_weather.weathercode]}
      </p>
    </div>
  );
}

export default Weather;
