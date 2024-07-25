import React from 'react'; 
import hostPicture from '../../resources/host-picture.png';
import checkIn from '../../resources/icons/check-in.png';
import host from '../../resources/icons/check-in.png';

const ListingInfo = () => {
  return (
    <div className="listing-info">
      <div className="title-container-2">
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
      </div>
      <h2 className="listing-title">Entire rental unit in Lima, Peru</h2>
      <p className="listing-details">2 guests · 1 bedroom · 1 bed · 1 bath</p>
      <span className="listing-tag">New</span>

      <div className="host-info">
        <img src={hostPicture} alt="Host Fernando" className="host-image" />
        <div className="host-details">
          <p>Hosted by Fernando</p>
          <p className="host-status">Superhost · 7 years hosting</p>
        </div>
      </div>

      <div className="amenity">
        <img src={checkIn} alt="Key icon" className="amenity-icon" />
        <div>
          <h3>Self check-in</h3>
          <p>Check yourself in with the smartlock.</p>
        </div>
      </div>

      <div className="amenity">
        <img src={host} alt="Medal icon" className="amenity-icon" />
        <div>
          <h3>Fernando is a Superhost</h3>
          <p>Superhosts are experienced, highly rated Hosts.</p>
        </div>
      </div>

      <div className="translation-note">
        <p>
          Some info has been automatically translated.{' '}
          <a href="#!" className="show-more">Show original</a>
        </p>
      </div>

      <div className="listing-description">
        <p>Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!</p>
        <p>
          It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clinica
          Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and
          Alas Peruanas University. It's also very close to La ...
        </p>
        <a href="#!" className="show-more">Show more</a>
      </div>
    </div>
  );
};

export default ListingInfo;
