import React from 'react';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder={placeholder} />
      <div className="search-icon">&#128269;</div>
    </div>
  );
};

export default SearchBar;
