import React from 'react';
import RegionPopup from './RegionPopup';
import CalendarPopup from './CalendarPopup';
import GuestsPopup from './GuestsPopup';
import CustomSearchBar from './CustomSearchBar';

const SearchContainer = ({ showRegionPopup }) => {
  return (
    <div className="search-container">
      <CustomSearchBar />
      <RegionPopup show={showRegionPopup} /> {/* Pass the state to RegionPopup */}
      <CalendarPopup />
      <GuestsPopup />
    </div>
  );
};

export default SearchContainer;
