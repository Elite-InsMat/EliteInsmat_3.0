import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '@components/layout';
import Seo from '@components/seo';
import ImageOverlay from '@components/gallery/imageOverlay';

import '@styles/album.css';

/**
 * Used in gatsby-node.js for generating our albums
 * @returns {JSX.Element}
 */
const Gallery = ({ pageContext }: Props): JSX.Element => {
  const [image, setImage] = useState('');

  return(
    <Layout>
      <Seo title='...'/>
      <div className='Gallery'>
          HEI
      </div>
    </Layout>
  );
};

type Props = {
  pageContext: {
    name: string;
    photos: Node[];
  }
}

type Node = {
  node: {
    publicURL: string;
    relativeDirectory: string;
    relativePath: string;
  }
}

export default Gallery;