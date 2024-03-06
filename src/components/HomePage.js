import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Searchbar from './Searchbar';
import CityCard from './CityCard';

const HomePage = () => {
  const [search, setSearch] = useState("");

  const cityNames = [
    "Agra",
    "Mathura",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chandigarh",
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Chennai",
    "Patna",
    "Jaipur",
    "Varanasi",
    "Gujarat",
  ];

  let cityList = cityNames.map((city, index) => {
    return <CityCard data={city} key={index} />;
  });

  return (
    <div>
      <Searchbar setSearch={setSearch} />
        <div className="cityList">
          {search == "" ? (
            cityList
          ) : (
            <CityCard data={search} className="searched" />
          )}
        </div>
        <Footer />
    </div>
  )
}

export default HomePage
