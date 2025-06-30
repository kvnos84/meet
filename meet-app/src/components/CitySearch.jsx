// src/components/CitySearch.jsx
import React, { useState } from 'react';

const CitySearch = ({ onCitySelect, allCities }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = allCities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleItemClicked = (city) => {
    setQuery(city);
    setSuggestions([]);
    onCitySelect(city); // <-- triggers event filtering in App.jsx
  };

  console.log("CitySearch is rendering", allCities); // <-- temporary debug

  return (
    <div className="city-search">
      <input
        type="text"
        role="textbox"
        data-testid="city-input"
        placeholder="Search for a city"
        value={query}
        onChange={handleInputChanged}
      />
      <ul className="suggestions">
        {suggestions.map((city, index) => (
          <li key={index} onClick={() => handleItemClicked(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
