import "./App.css";
import Searchbar from "./components/Searchbar";
import CityCard from "./components/CityCard";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("")
  // const [cityList, setCityList] = useState([])

  const cityNames = [
    'Agra', 'Mathura', 'Delhi', 'Mumbai'
  ];

  let cityList = cityNames.map((city, index)=>{
    return <CityCard data={city} key={index}/>
  })

  
  return (
    <div className="App">
      <Searchbar setSearch={setSearch}/>
      <div className="cityList">
        {search == '' ? cityList : <CityCard data={search}/>}
      </div>
    </div>
  );
}

export default App;
