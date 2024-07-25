import React from 'react';
import host from '../../resources/host-picture.png';
import ballonIcon from '../../resources/icons/balloon.png';
import briefcaseIcon from '../../resources/icons/briefcase.png';
import coHost1 from '../../resources/co-host1.webp';
import coHost2 from '../../resources/co-host2.webp';


const MeetHost = () => {
  return (
    <section className="meet-host">
      <h2>Meet your host</h2>
      <div className="host-container">
        <div className="left-column">
          <div className="host-card">
            <div className="host-left">
              <div className="host-photo">
                <img src={host}alt="Host" className="circular-img" />
              </div>
              <div className="name">
                <h2 className="host-name">John Doe</h2>
                <p className="superhost">Superhost</p>
              </div>
            </div>
            <div className="host-data">
              <div className="info-item">
                <h3>310</h3>
                <p>Reviews</p>
              </div>
              <div className="info-item">
                <h3>4.92 <span className="star">★</span></h3>
                <p>Rating</p>
              </div>
              <div className="info-item">
                <h3>7</h3>
                <p>Years hosting</p>
              </div>
            </div>
          </div>
          <div className="host-details">
            <div className="detail-item">
              <img src={ballonIcon} alt="Icon" className="icon" />
              <p>Born in the 80s</p>
            </div>
            <div className="detail-item">
              <img src={briefcaseIcon} alt="Icon" className="icon" />
              <p>My work: Hospitality</p>
            </div>
          </div>
          <div className="host-description">
            <p>Hello world! I love traveling and I also love welcoming guests in my home country, Perú, meeting new...</p>
            <a href="#!" className="show-more">Show more &gt;</a>
          </div>
        </div>
        <div className="right-column">
          <div className="superhost-info">
            <h3>Fernando is a Superhost</h3>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
          </div>
          <div className="co-hosts">
            <h3>Co-hosts</h3>
            <div className="co-host-list">
              <div className="co-host">
                <img src={coHost1} alt="Co-host" className="circular-img" />
                <p>Percy</p>
              </div>
              <div className="co-host">
                <img src={coHost2} alt="Co-host" className="circular-img" />
                <p>Raul</p>
              </div>
            </div>
          </div>
          <div className="host-stats">
            <h3>Host details</h3>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>
          <button className="message-host">Message Host</button>
        </div>
      </div>
    </section>
  );
};

export default MeetHost;
