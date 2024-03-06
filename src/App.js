import "./App.css";
import Searchbar from "./components/Searchbar";
import CityCard from "./components/CityCard";
import { useState } from "react";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="CityPage" element={<CityPage />} />
      </Routes>
    </div>
  );
}

export default App;
