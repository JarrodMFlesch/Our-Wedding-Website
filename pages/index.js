import React from 'react';

import SiteWidth from '../components/layout/SiteWidth';

import AboutUs from '../components/sections/AboutUs';

import Spacer from '../components/styled/Spacer';
import './index.scss';
import AboutTheEvent from '../components/sections/AboutTheEvent';
import Questionare from '../components/sections/Questionare';

const baseClass = 'homepage';

const Home = () => {
  return (

    <SiteWidth className={`${baseClass}`}>
      <AboutUs />

      <Spacer size="large" />

      <AboutTheEvent />

      <Spacer size="large" />

      <Questionare />
    </SiteWidth>
  );
};

export default Home;
