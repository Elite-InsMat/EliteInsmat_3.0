import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../styles/info.css';

const Info = (): JSX.Element => {
  return(
    <Layout>
      <Seo title="Info" />
      <div className='Info'>
        <div className='info'>
          <section className='about-us'>
            <h1>Elite InsMat</h1>
            <h2>Meistä</h2>
            <article>
              <p>
                  Olemme hassu joukko pääasiassa Tietotekniikan opiskelijoita, jotka auttavat toisiaan opiskelussa,
                  järjestävät erilaisia bileitä ja sekoilevat ympäri Turkua. Kuka tahansa voi liittyä hilpeään
                  poppooseemme.
              </p>
            </article>
          </section>
          <section>
            <h3>Porukkamme historia</h3>
            <article>
              <p>
                  Alkuperäisten jäsenten fuksivuoden syksynä, 2019, keksittiin, että vaikeita insinöörimatematiikan demoja
                  on turha tehdä yksin. Joukossa tyhmyys tiivistyy. Syntyi idea porukasta, joka auttaisi toisiaan insmat demoissa.
                  Porukka kasvoi pikkuhiljaa muutamasta jäsenestä, monen kymmenen ihmisen lukupiiriksi. Porukan idea muuttui nopeasti
                  myös pelkästä yhteisien opiskeluhetkien järjestämisestä, esimerkiksi bileiden pitämiseen. Kesällä 2020
                  porukkamme tekikin ensimmäisen mökkireissunsa, mökki 1.0, ja seuraavana syksynä uuden mökkireissun
                  mökki 1.5! Aiomme kasvattaa porukkaamme myös vielä tulevaisuudessa ja
                  järjestää entistä hullumpia kekkereitä ja muita yhteisiä tapahtumia! Ensi kesäksi onkin suunniteilla mökki 2.0 ja
                  kandivuoden jälkeisellä kesälle mahdollisesti matka Japaniin...
              </p>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Info;