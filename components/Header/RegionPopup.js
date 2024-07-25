import React from 'react'; 

const RegionPopup = ({ show }) => {
  return (
    <div className={`region-popup ${show ? 'show' : 'hide'}`}>
      <h3>Search by region</h3>
      <div className="region-grid">
        <div className="region-item">
          <img src="../resources/map/i am flexible.png" alt="World Map" />
          <span>I'm flexible</span>
        </div>
        <div className="region-item">
          <img src="../resources/map/south-east-asia.webp" alt="Southeast Asia Map" />
          <span>Southeast Asia</span>
        </div>
        <div className="region-item">
          <img src="../resources/map/canada.webp" alt="Canada Map" />
          <span>Canada</span>
        </div>
        <div className="region-item">
          <img src="../resources/map/europe.webp" alt="Europe Map" />
          <span>Europe</span>
        </div>
        <div className="region-item">
          <img src="../resources/map/Thailand.webp" alt="Thailand Map" />
          <span>Thailand</span>
        </div>
        <div className="region-item">
          <img src="../resources/map/middle east.webp" alt="Middle East Map" />
          <span>Middle East</span>
        </div>
      </div>
    </div>
  );
};

export default RegionPopup;
