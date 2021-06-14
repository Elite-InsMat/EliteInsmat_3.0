# Elite InsMat sivut 3.0!

Toteutettu yrityksen hackathonissa **11.6-13.6.2021!**

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3febd63-9343-4739-aeab-4119d6215309/deploy-status)](https://app.netlify.com/sites/stupefied-davinci-a52454/deploys)

## Devaus

Tarvitset Node.js:n koneellesi, mieluiten v14.0.0 ja uudempi! Asenna myös gatsby komennolla `npm i -g gatsby-cli`.

### npm i

asenna riippuvuudet

### gatsby develop

käynnistää dev serverin osoitteessa https://localhost:8000 ja avaa tämän sivun automaattisesti selaimessasi

### gatsby build

luo tuotanto versio koodistatsi public -kansioon

## Ohjeita

Tehdään aina oma branchi uusille ominaisuuksille, ei pusketa suoraan masteriin! Juhana/joku muu tekee jokaisesta featuresta aina code reviewing ennen kuin se mergataan! Muistakaa myös käyttää lintteriä ennen pull reguestia, jotta koodaustyylit pysyvät yhdenmukaisina!

Uudet react komponentit aina funktionaalisina komponentteina (ellei painavaa syytä class pohjaiseen komponenttiin)!

### Galleria, albumit ja kuvat

Jos haluat lisätä galleriaan uuden albumin, luo haluamasi niminen kansio src/images/galleria ja laita siihen kaikki albumiin haluamasi kuvat. Jos haluat lisätä kuvia albumiin, etsi albumin nimi src/images/galleria kansiosta ja lisää hakemistoon kuvat. Kun olet puskenut muutoksesi, uudet kuvat ja albumit pitäisivät näkyä sivulla, sen jälkeen kun sivu on rakentunut Netlifyissä!

HUOM! Jokaisen albumin kansiossa on oltava **cover** niminen kuvatiedosto, josta tehdään albumille galleriasivulla näkyvä kuva!
