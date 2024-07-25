import React from 'react';

const SearchBar = ({ className, onClick }) => {
  return (
    <div className={`search-bar ${className}`} id="searchBar">
      <button className="search-option" onClick={onClick}>Anywhere</button>
      <span className="separator"></span>
      <button className="search-option" onClick={onClick}>Any week</button>
      <span className="separator"></span>
      <button className="search-option" onClick={onClick}>Add guests</button>
      <button className="search-button" onClick={onClick}>
        <img src="resources/Search Icon.png" alt="Search" className="icon" />
      </button>
    </div>
  );
};

export default SearchBar;
