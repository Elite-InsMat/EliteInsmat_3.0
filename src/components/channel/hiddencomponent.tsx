import React from 'react';
import LinkButton from './linkbutton';

const HiddenComponent = ({ images }: Props): JSX.Element => {
  return (
    <>
      <LinkButton
        link="https://eliteinsmat.fi/elitehub"
        name="EliteHub"
        image={images.edges[2].node.childImageSharp.gatsbyImageData}
      />
      <LinkButton
        link="https://eliteinsmat.fi/fenkoli"
        name="Fenkoli"
        image={images.edges[3].node.childImageSharp.gatsbyImageData}
      />
    </>
  );
};

type Props = {
  images: any;
};

export default HiddenComponent;
