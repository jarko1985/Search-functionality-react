import React, { useState } from "react";
import "./searchbar.css";

const Searchbar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchTerm = event.target.value;
    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filteredData.length != 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.phone}
                target="_blank"
                rel="noreferrer"
                key={key}
              >
                <p>{value.city}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
