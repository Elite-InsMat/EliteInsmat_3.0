import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const LinkButton = ({ name, link, image }: Props): JSX.Element => {
  return (
    <a href={link}>
      <div className="link-div">
        <GatsbyImage image={image} alt={name} className="link-image img-spin-discord" />
        <div className="link">{name}</div>
      </div>
    </a>
  );
};

type Props = {
  link: string;
  name: string;
  image: IGatsbyImageData;
};

export default LinkButton;
