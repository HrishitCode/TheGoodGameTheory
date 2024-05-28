import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a beer..."
      onChange={handleChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
