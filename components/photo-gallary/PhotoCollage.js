import React from 'react';

import PhotoGrid from './PhotoGrid';
import GalleryOverlay from './GalleryOverlay';

const PhotoCollage = () => {
  return (
    <section className="photo-collage">
        <PhotoGrid />
        <GalleryOverlay />
    </section>
  );
};

export default PhotoCollage;
