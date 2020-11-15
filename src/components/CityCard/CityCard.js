import React from "react";
import "../CityCard/CityCard.css";
const CityCard = ({ cityCardHolder }) => {
  const { weather, hasError, isLoading, validName } = cityCardHolder;
  return (
    <div>
      {isLoading && <p>Loading ... </p>}
      {weather.name && !hasError && (
        <div className="CityCard">
          <p>City : {weather.name}</p>
          <p>country :{weather.sys.country}</p>
          <p>{weather.weather[0].description}</p>
          <p>Max :{weather.main.temp_max}</p>
          <p>Min :{weather.main.temp_min}</p>
          <p>
            Location : {weather.coord.lon} , {weather.coord.lat}
          </p>
        </div>
      )}
      {validName && <p>Write valid City name</p>}
    </div>
  );
};

export default CityCard;
