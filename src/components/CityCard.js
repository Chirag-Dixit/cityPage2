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

  // console.log(temp.name, temp.main)

  // const properties = Object.entries(temp.main).map(([key,value]) => {
  //   return (
  //     <div>{key} : {value.toString()}</div>
  //   )
  // })

  return (
    <div className="cityCard">
      <h2>
        {prop.data}
      </h2>
      {/* {temp.main.feels_like}
      {temp.main.humidity}
      {temp.main.pressure}
      {temp.main.temp}
      {temp.main.temp_max}
      {temp.main.temp_min} */}
      <p>
        Temperature: {temp?.main?.temp}
      </p>
      <p>
        Humidity: {temp?.main?.humidity}
      </p>
      <p>
        Max-Temperature: {temp?.main?.temp_max}
      </p>
      <p>
        Min-Temperature: {temp?.main?.temp_min}
      </p>
    </div>
  );
};

export default CityCard;
