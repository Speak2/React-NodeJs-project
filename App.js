import React from 'react';  
import './styles/main.css'; 
import Header from './components/Header/Header';
import NextToHeader from './components/next-to-header/NextToHeader';
import PhotoCollage from './components/photo-gallary/PhotoCollage';
import MiddleComponent from './components/Main-body/MiddleComponent';
import ReviewsSection from './components/Reviews/ReviewsSection';
import LocationSection from './components/location-section/LocationSection';
import MeetHost from './components/Meet-host/MeetHost';
import ThingsToKnow from './components/Things-to-know/ThingsToKnow';
import LocationBreadcrumb from './components/location-breadcrumb/LocationBreadcrumb';
import ExploreOptions from './components/explore-option/ExploreOptions';

function App() {
  return (
    <div className="App">

      <Header />
      <NextToHeader />
      <PhotoCollage />
      <MiddleComponent />
      <ReviewsSection />
      <LocationSection />
      <MeetHost />
      <ThingsToKnow />
      <LocationBreadcrumb />
      <ExploreOptions />
      
    </div>
  );
}

export default App;