import React, { useEffect, useState } from "react";

const CityCard = (prop) => {
  const [temp, setTemp] = useState([]);
  const apiKey = "1145222a345ad115be2d55b08f5c19cc";

  useEffect(() => {
    async function checkWeather(cityName) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

      const response = await fetch(apiUrl + `&appid=${apiKey}`);
      var data = await response.json();

      setTemp(data);
    }
    checkWeather(prop.data);
  }, []);

  return (
    <div>
      {temp?.main ? (
        <div className="cityCard">
          <h2>{prop.data}</h2>
          <div className="properties">
            <p>
              Temperature:
              <b>{temp?.main?.temp}</b>
            </p>
            <p>
              Feels Like:
              <b>{temp?.main?.feels_like}</b>
            </p>
            <p>
              Humidity:
              <b>{temp?.main?.humidity}</b>
            </p>
            <p>
              Max-Temperature:
              <b>{temp?.main?.temp_max}</b>
            </p>
            <p>
              Min-Temperature:
              <b>{temp?.main?.temp_min}</b>
            </p>
          </div>
        </div>
      ) : (
        <h1>Invalid Search Input</h1>
      )}
    </div>
  );
};

export default CityCard;
