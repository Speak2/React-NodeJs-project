import React from 'react'; 
import bedroom from '../../resources/image-bedroom.webp';

const SleepSection = () => {
  return (
    <div className="sleep-section">
      <h2>Where you'll sleep</h2>
      <div className="bedroom-card">
        <img src={bedroom} alt="Bedroom" />
        <h3>Bedroom</h3>
        <p>1 double bed</p>
      </div>
    </div>
  );
};

export default SleepSection;
