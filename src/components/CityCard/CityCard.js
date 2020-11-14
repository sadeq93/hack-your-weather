import React from 'react';
const CityCard = ({cityCardHolder}) => {
    const {weather,hasError,isLoading,validName} = cityCardHolder;
    return (
        <div>
            {isLoading && <p>Loading ... </p>}
            {weather.name && !hasError && 
            <div className = 'CityCard' >
                <h6>{weather.name}</h6>
                <h6>{weather.sys.country}</h6>
                <p>{weather.weather.desciption}</p>
                <p>{weather.main.temp_max}</p>
                <p>{weather.main.temp_min}</p>
                <p>{weather.coord.lon} , {weather.coord.lat}</p>
            </div> }
            {validName && <p>Write valid City name</p>}
        </div>
        );
}
 
export default CityCard;