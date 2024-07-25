import React from 'react';
import ListingInfo from './ListingInfo';
import SleepSection from './SleepSection';
import AmenitiesSection from './AmenitiesSection';
import CalendarSection from './CalendarSection';


const MiddleLeft = () => {
  return (
    <div className="middle-left">

        <ListingInfo />
        <SleepSection />
        <AmenitiesSection />
        <CalendarSection />
        
    </div>
  );
};

export default MiddleLeft;
