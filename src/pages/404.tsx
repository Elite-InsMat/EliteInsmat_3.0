import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../styles/404.css';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Seo title="404: Not found" />
    <div className='FOF'>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness 🥺</p>
    </div>
  </Layout>
);

export default NotFoundPage;
