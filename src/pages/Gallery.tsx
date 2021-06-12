import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import '../styles/Gallery.css';

const Gallery = () => {
  const data = useStaticQuery(graphql`{
    file(relativePath: {regex: "mokki1.jpg"}) {
      childImageSharp {
        fixed(cropFocus: CENTER) {
          src
          srcSet
        }
      }
    }
  }`);
  
  return (
    <div className="gallery-container">
      <div className="image">
        <Link to="/Gallery/mokki1.0">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} tabIndex='0' />
        </Link>
        <div className="desc">Mökki 1.0</div>
      </div>
      <div className="image">
        <Link to="/Gallery/utu100v">
          <img alt="" src="images\utu100v\utu100v1.png" />
        </Link>
        <div className="desc">UTU 100v</div>
      </div>
    </div>
  );
};

export default Gallery;
