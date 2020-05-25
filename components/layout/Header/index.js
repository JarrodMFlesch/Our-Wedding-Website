import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import SiteWidth from '../SiteWidth';

import './index.scss';

const mapDispatchToProps = dispatch => ({
  setHeaderHeight: height => dispatch({ type: 'SET_HEADER_HEIGHT', payload: height }),
});

const mapStateToProps = state => ({
  windowWidth: state.windowWidth,
  scrollPos: state.scrollPos,
});

const baseClass = 'header';

const Header = (props) => {
  const { scrollPos, setHeaderHeight, windowWidth } = props;
  const headerRef = useRef();
  const [showingAlert, setShowingAlert] = useState(false);

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [windowWidth, showingAlert]);

  const shouldShowShadow = scrollPos > 100;
  const classes = [
    baseClass,
    shouldShowShadow && `${baseClass}--show-shadow`,
  ].filter(Boolean).join(' ');

  return (
    <div ref={headerRef} className={classes}>
      <div className={`alert alert--${showingAlert ? 'visible' : 'hidden'}`}>
        <SiteWidth>
          <p className={`${baseClass}__pill ${baseClass}__pill--tl`}><em>COVID-19 Announcement</em></p>
          <p className="alert__text">
            Due to COVID-19 we have decided to change our wedding, we will be having an intimate ceremony with our closest loved ones on June 20th, followed by a reception on Sunday September 6th at 6pm (Labor Day Weekend). We hope everyone is staying safe, we love you all!
            <br />
            <b>
              Please RSVP by August 9th&nbsp;
              <a
                href="https://allieandjarrod.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              , or using the RSVP button stuck to the bottom of the page!

            </b>
            <div className={`${baseClass}__close-button-wrapper`}>
              <button
                className={`${baseClass}__pill ${baseClass}__pill--br`}
                type="button"
                onMouseUp={() => setShowingAlert(false)}
              >
                <em>Close</em>
              </button>
            </div>
          </p>
        </SiteWidth>
      </div>
      <header>
        <SiteWidth className={`${baseClass}-wrap`}>
          <h6 className={`${baseClass}__logo`}>Jarrod & Alexandria</h6>
          {/* <button
            className={`covid-button covid-button--${showingAlert ? 'hidden' : 'visible'}`}
            type="button"
            onMouseUp={() => setShowingAlert(true)}
          >
            <em>COVID-19 Info</em>
          </button> */}
        </SiteWidth>
      </header>
    </div>
  );
};

Header.propTypes = {
  setHeaderHeight: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  scrollPos: PropTypes.number.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
