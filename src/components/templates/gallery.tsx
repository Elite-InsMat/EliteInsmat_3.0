import React from 'react';

import Layout from '@components/layout';
import Seo from '@components/seo';

import '@styles/album.css';

/**
 * Used in gatsby-node.js for generating our albums
 * @returns {JSX.Element}
 */
const Gallery = ({pageContext} : Props): JSX.Element => {
  return(
    <Layout>
      <Seo title='...'/>
      <div className='gallery'>
        {pageContext.albums.map((album : string) =>{ 
          console.log(pageContext.photos[0].node);
          const albumName = album.substring(9,album.length);
          const image = pageContext.photos.find((n) => n.node.relativeDirectory === album && n.node.relativePath.includes('cover'));
          return(
            <div className="albumCover" key={album}>
              <a href={album}>
                <h2>{albumName}</h2>
                {image ? <img src={image.node.publicURL} /> : <h1></h1>}     
              </a>
            </div> 
          );
        })}
      </div>
    </Layout>
  );
};

type PageContext = {
  albums: Array<string>,
  photos: Array<Image>
  
}
type Image = {
  node: Node
}
type Node = {
  publicURL: string,
  relativeDirectory: string,
  relativePath: string
}

type Props = {
  pageContext: PageContext
}

export default Gallery;