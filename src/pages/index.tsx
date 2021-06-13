import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../styles/index.css';

const IndexPage = (): JSX.Element => {
  const result = useStaticQuery<Data>(graphql`
    query {
      file(name: { eq: "logo" }){
        publicURL
      }
    }
  `);

  return(
    <Layout>
      <Seo title="Home" />
      <div className="Home">
        <header>
          <h1>Elite InsMat</h1>
          <h2>meemihtävä opiskelijaporukka Turun yliopistosta</h2>
          <img src={result.file.publicURL} alt='haalarimerkki' />
          <h3>insmatit on muuten läpi :)</h3>
        </header>
      </div>
    </Layout>
  );
};

type Data = {
    file: {
      publicURL: string;
    }
};

export default IndexPage;
