import React from 'react'; 
import image1 from '../../resources/image 1.webp';
import image3 from '../../resources/image 3.webp';
import image4 from '../../resources/image 4.webp';
import image5 from '../../resources/image 5.webp';
import image6 from '../../resources/image 6.webp';

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      <div className="slider-buttons">
        <button className="slider-btn share-btn">
          <img src="resources/share.png" alt="Share" className="heart-icon-1" />
        </button>
        <div className="right-buttons">
          <button id="saveButton-2" className="search-option heart-button">
            <svg className="heart-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
              C30,20.335,16,28.261,16,28.261z" />
            </svg>
          </button>
        </div>
        <div className="image-counter">1 / 5</div>
      </div>
      <div className="photo-item main-photo">
        <img src={image1} alt=" " />
      </div>
      <div className="photo-item">
        <img src={image3} alt=" " />
      </div>
      <div className="photo-item">
        <img src={image4} alt=" " />
      </div>
      <div className="photo-item">
        <img src={image5} alt=" " />
      </div>
      <div className="photo-item">
        <img src={image6} alt=" " />
      </div>
      <button className="show-all-photos">
        <span className="button-icon"> &#8942;&#8942;&#8942;</span>
        Show all photos
      </button>
    </div>
  );
};

export default PhotoGrid;
