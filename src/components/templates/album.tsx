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
const Album = ({ pageContext }: Props): JSX.Element => {
  const [image, setImage] = useState('');

  return(
    <Layout>
      <Seo title='...'/>
      <div className='Album'>
        <Link to='/galleria'><span>&#10094;</span></Link>
        <h1>{pageContext.name.substring(9, pageContext.name.length)}</h1>
        {image ? <ImageOverlay image={image} setImage={setImage} /> : null}
        <div className='photos'>
          {pageContext.photos.map((node, i) => {
            return(
              <img 
                key={i} 
                className='photo'
                src={node.node.publicURL}
                onClick={() => setImage(node.node.publicURL)}
              />
            );
          })}
        </div>
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

export default Album;