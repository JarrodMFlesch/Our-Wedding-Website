import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SiteWidth from '../components/layout/SiteWidth';
import AboutUs from '../components/sections/AboutUs';
import Spacer from '../components/styled/Spacer';
import AboutTheEvent from '../components/sections/AboutTheEvent';
import Questionare from '../components/sections/Questionare';

import './index.scss';
import WeddingParty from '../components/sections/WeddingParty';
import Registry from '../components/sections/Registry';

const mapStateToProps = state => ({
  rsvpHeight: state.rsvpHeight,
});

const baseClass = 'homepage';

const Home = (props) => {
  const { rsvpHeight } = props;

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
      <Spacer customSize={rsvpHeight} />

    </SiteWidth>
  );
};

Home.propTypes = {
  rsvpHeight: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Home);
