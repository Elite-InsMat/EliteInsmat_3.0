import React, { useState } from 'react';

import ImageOverlay from './ImageOverlay';
import { Link } from 'gatsby';

import '../styles/SubGallery.css';


const SubGallery = ({ path, images, header }) => {
  /*const [showOverlay, setShowOverlay] = useState(false)*/
  const [image, setImage] = useState(null);
  const result = [[], [], []];

  const imagesPerColumn = Math.ceil(images.length / 3);

  //splits array to three parts, one part for each column

  for (let line = 0; line < 3; line++) {
    for (let i = 0; i < imagesPerColumn; i++) {
      const value = images[i + line * imagesPerColumn];
      if (!value) continue;
      result[line].push(value);
    }
  }

  return(
    <div className='SubGallery'>
      {image ? <ImageOverlay image={image} setImage={setImage} /> : null}
      <Link to='/Gallery'><span>&#10094;</span></Link>
      <h1>{header}</h1>
      <div className='row'>
        {result.map((r, i) => {
          return(
            <div className='column' key={i} >
              { r.map((img, i) => <img alt='' onClick={() => setImage(`${path}${img}`)} key={i} src={`${path}${img}`} />)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubGallery;
