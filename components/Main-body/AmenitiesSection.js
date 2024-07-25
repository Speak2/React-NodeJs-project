import React from 'react'; 
import kitchen from '../../resources/icons/kitchen-set.png';
import wifi from '../../resources/icons/wifi.png';
import tv from '../../resources/icons/television.png';
import elevator from '../../resources/icons/elevator.png';
import washer from '../../resources/icons/washer.png';
import hairDryer from '../../resources/icons/hairdryer.png';
import refrigerator from '../../resources/icons/refrigerator.png';
import dryer from '../../resources/icons/washer.png';
import carbon from '../../resources/icons/alarm.png';
import smoke from '../../resources/icons/fire-alarm.png';

const AmenitiesSection = () => {
  return (
    <div className="amenities-section">
      <h2>What this place offers</h2>
      <div className="amenities-grid">
        <div className="amenity-item">
          <img src={kitchen} alt="Kitchen" />
          Kitchen
        </div>
        <div className="amenity-item">
          <img src={wifi}  alt="Wifi" />
          Wifi
        </div>
        <div className="amenity-item">
          <img src={tv} alt="TV" />
          TV
        </div>
        <div className="amenity-item">
          <img src={elevator}  alt="Elevator" />
          Elevator
        </div>
        <div className="amenity-item">
          <img src={washer} alt="Washer" />
          Washer
        </div>
        <div className="amenity-item-2">
          <img src={hairDryer} alt="Hair dryer" />
          Hair dryer
        </div>
        <div className="amenity-item-2">
          <img src={refrigerator} alt="Refrigerator" />
          Refrigerator
        </div>
        <div className="amenity-item-2">
          <img src={dryer} alt="Dryer" />
          Dryer
        </div>
        <div className="amenity-item">
          <img src={carbon} alt="Carbon monoxide alarm" />
          <s> Carbon monoxide alarm</s>
        </div>
        <div className="amenity-item">
          <img src={smoke} alt="Smoke alarm" />
          <strike>Smoke alarm</strike>
        </div>
      </div>
      <button className="show-all-amenities">Show all 32 amenities</button>
    </div>
  );
};

export default AmenitiesSection;
