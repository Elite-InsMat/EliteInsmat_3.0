import React, { useState } from 'react';
import { Link } from 'gatsby';

/**
 * Used in gatsby-node.js for generating our albums
 * @returns {JSX.Element}
 */
const Album = (props: unknown): JSX.Element => {
  const [image, setImage] = useState(null);
  const result = [[], [], []];
  console.log(props);

  return(
    <div className='SubGallery'>
          hei
    </div>
  );
};

/*type Props = {
  name: string;
  files: unknown;
}*/

export default Album;