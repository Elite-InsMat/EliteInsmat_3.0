import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import HiddenComponent from '../components/channel/hiddencomponent';
import CodeForm from '../components/channel/codeform';
import LinkButton from '../components/channel/linkbutton';
import Layout from '../components/layout';
import Seo from '../components/seo';

import '../styles/channels.css';

const Channels = (): JSX.Element => {
  const [isHidden, setIsHidden] = useState(true);

  const pageQuery = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: { extension: { regex: "/(png)/" }, relativeDirectory: { eq: "channels" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  console.log(pageQuery);
  return (
    <Layout>
      <Seo title="Kanavat" />
      <div className="main-div">
        <div className="content-div">
          <div className="headers">
            <h1 className="header1">KANAVAT</h1>
            <h2 className="header2">Täältä löydät EliteInsmat kanavat</h2>
            <p className="mobiili">Your software is out of date so the site may behave incorrectly!</p>
          </div>
          <div className="link-contents">
            <LinkButton
              link="https://discord.gg/ZC3vRtQW"
              name="DISCORD"
              image={pageQuery.allFile.edges[1].node.childImageSharp.gatsbyImageData}
            />
            <LinkButton
              link="https://steamcommunity.com/groups/InsMat"
              name="STEAM"
              image={pageQuery.allFile.edges[0].node.childImageSharp.gatsbyImageData}
            />
            <LinkButton
              link="https://rommi.org"
              name="ROMMI.ORG"
              image={pageQuery.allFile.edges[4].node.childImageSharp.gatsbyImageData}
            />
            {isHidden ? null : <HiddenComponent images={pageQuery.allFile.edges} />} {/*null*/}
          </div>
          <div className="secret-code">
            <CodeForm setIsHidden={setIsHidden} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Channels;
