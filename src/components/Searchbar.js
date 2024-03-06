import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (prop) => {
  const { setSearch } = prop;
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(() => {
      return event.target.value;
    });
  };

  const handleSearch = () => {
    setSearch((prev) => {
      return searchValue;
    });
  };

  const clearSearch = () => {
    setSearch((prev) => {
      return "";
    });
  };

  return (
    <div className="searchBar">
      <FontAwesomeIcon
        icon={faCloud}
        beat
        size="lg"
        style={{ color: "#072a45", marginRight: "20px" }}
      />
      <input
        onChange={handleChange}
        type="text"
        className="search"
        placeholder="Enter City Name here..."
        autoFocus
      />
      <button onClick={handleSearch} style={{ marginRight: "10px" }}>
        Search
      </button>
      <button onClick={clearSearch}>Reset</button>
    </div>
  );
};

export default Searchbar;
