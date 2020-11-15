import React, { useState } from "react";
import Search from "../components/Search";
import CityCard from "../components/CityCard/CityCard.js";
const CityWeatherContainer = () => {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [validName, setvalidName] = useState(false);
  async function fetchWeatherData(city) {
    try {
      setLoading(true);
      const API_Key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
      const res = await fetch(URL);
      const data = await res.json();
      setWeather(data);
      {
        !data.name && setvalidName(true);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }

  const handleCityName = (event) => {
    const value = event.target.value;
    setCityName(value);
  };

  return (
    <div>
      <h1>Weather</h1>
      <Search
        fetchData={() => fetchWeatherData(cityName)}
        changeName={handleCityName}
        cityName={cityName}
      />
      <CityCard
        cityCardHolder={{
          weather: weather,
          hasError: hasError,
          isLoading: isLoading,
          validName: validName,
        }}
      />
    </div>
  );
};

export default CityWeatherContainer;
