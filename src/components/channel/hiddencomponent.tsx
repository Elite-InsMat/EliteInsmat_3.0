import React from 'react';
import LinkButton from './linkbutton';

const HiddenComponent = ({ images }: Props): JSX.Element => {
  return (
    <>
      <LinkButton
        link="https://sites.eliteinsmat.fi/elitehub"
        name="EliteHub"
        image={images[2].node.childImageSharp.gatsbyImageData}
      />
      <LinkButton
        link="https://sites.eliteinsmat.fi/fenkoli"
        name="Fenkoli"
        image={images[3].node.childImageSharp.gatsbyImageData}
      />
    </>
  );
};

type Props = {
  images: any;
};

export default HiddenComponent;
