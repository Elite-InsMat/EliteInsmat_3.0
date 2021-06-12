import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../styles/index.css';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <div className="Home">
      <header>
        <h1>Elite InsMat</h1>
        <h2>meemihtävä opiskelijaporukka Turun yliopistosta ::D</h2>
        <h3>insmatit on muuten läpi :)</h3>
      </header>
    </div>
  </Layout>
);

export default IndexPage;
