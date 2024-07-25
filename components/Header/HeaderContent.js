import React from 'react';
import SearchBarWrapper from './SearchBarWrapper';
import NavButtons from './NavButtons';

const HeaderContent = () => {
  return (
    <div className="header-content">
        <SearchBarWrapper />
        <NavButtons />
    </div>
  );
};

export default HeaderContent;