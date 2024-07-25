import React from 'react';
import shareIcon from '../../resources/share.png';


const NextToHeader = () => {
  return (
    <div className="next-to-header">
      <div className="inner-next-to-header">
        <div className="title-container">
          <h1>Comfy New Apt. in Pueblo Libre!</h1>
        </div>
        <div className="button-container">
          <button className="search-option-share">
            <img src={shareIcon}alt="Share" />
            Share
          </button>
          <button id="saveButton" className="search-option heart-button">
            <svg className="heart-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
              C30,20.335,16,28.261,16,28.261z"/>
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextToHeader;
