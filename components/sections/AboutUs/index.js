import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ImageContent from '../../elements/ImageContent';

import breakpoints from '../../../breakpoints';
import './index.scss';

const baseClass = 'about-us';

const mapStateToProps = state => ({
  windowWidth: state.windowWidth,
});

const AboutUs = (props) => {
  const { windowWidth } = props;

  const aboutUsImage = (windowWidth >= breakpoints.tabletWidth || windowWidth === 0) ? '/static/img/engagement-header-wide.png' : '/static/img/engagement-header-tall.png';

  return (
    <ImageContent className={`${baseClass}`} overlayText imagePath={aboutUsImage}>
      <div>
        <h1>So excited!</h1>
        <br />
        <div>
          <p>
            The day has come where we will say our&nbsp;
            <em className="no-wrap">I Do&apos;s.</em>
            &nbsp;And we could not be more excited to share it with all of you! We hope to share a little slice of our lives out here on the web before our big day 😄
          </p>
        </div>
      </div>
    </ImageContent>
  );
};

AboutUs.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(AboutUs);
