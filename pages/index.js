import React from 'react';

import SiteWidth from '../components/layout/SiteWidth';

import AboutUs from '../components/sections/AboutUs';
import Spacer from '../components/styled/Spacer';
import AboutTheEvent from '../components/sections/AboutTheEvent';
import Questionare from '../components/sections/Questionare';

import './index.scss';
import WeddingParty from '../components/sections/WeddingParty';
import Registry from '../components/sections/Registry';

const baseClass = 'homepage';

const Home = () => {
  return (

    <SiteWidth className={`${baseClass}`}>
      {console.log('Jim, Jake & Sean — get out.')}

      <AboutUs />
      <Spacer size="large" />

      <AboutTheEvent />
      <Spacer size="medium" />

      <Questionare />
      <Spacer size="medium" />

      {/* <WeddingParty />
      <Spacer size="medium" /> */}

      <Registry />
      <Spacer size="medium" />

    </SiteWidth>
  );
};

export default Home;
