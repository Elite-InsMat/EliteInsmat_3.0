import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import '../styles/ImageOverlay.css';

const ImageOverlay = ({ image, setImage }) => {
  return (
    <div className="ImageOverlay" onClick={() => setImage(null)}>
      <img className="image-viewer" src={image} />
    </div>
  );
};

export default ImageOverlay;