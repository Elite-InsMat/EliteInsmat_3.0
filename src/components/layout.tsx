/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react';

import './layout.css';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

interface Props {
  children: ReactNode;
}

export default Layout;
