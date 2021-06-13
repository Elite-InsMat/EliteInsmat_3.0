import React from 'react';

import '@styles/ImageOverlay.css';

const ImageOverlay = ({ image, setImage }: Props): JSX.Element => {
  return (
    <div className='ImageOverlay' onClick={() => setImage('')}>
      <img className='image-viewer' src={image} />
    </div>
  );
};

type Props = {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
}

export default ImageOverlay;