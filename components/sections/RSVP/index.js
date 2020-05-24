import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Row from '../../layout/Row';
import Column from '../../layout/Column';
import SiteWidth from '../../layout/SiteWidth';
import Spacer from '../../styled/Spacer';

import './index.scss';

const mapDispatchToProps = dispatch => ({
  setRSVPHeight: height => dispatch({ type: 'SET_RSVP_HEIGHT', payload: height }),
});

const RSVP = (props) => {
  const { setRSVPHeight } = props;
  const rsvpRef = useRef(null);

  useEffect(() => {
    const rsvpHeight = rsvpRef.current ? rsvpRef.current.offsetHeight : 0;
    setRSVPHeight(rsvpHeight);
  }, []);

  return (
    <footer className="footer" ref={rsvpRef}>
      <div className="footer-content-wrap">
        <SiteWidth>
          <Row>
            <Column span={8} midBreak={12}>
              <p className="footer-text">
                Due to COVID-19 you can now RSVP online&nbsp;
                <span role="img" aria-label="heart">❤️</span>
                <span role="img" aria-label="arrow right">➡️</span>
              </p>
            </Column>

            <Column span={4} midBreak={12}>
              <div className="footer-rsvp-wrap">
                <a
                  href="https://allieandjarrod.eventbrite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="footer-rsvp"
                    type="button"
                  >
                    RSVP
                  </button>
                </a>
              </div>
            </Column>
          </Row>
        </SiteWidth>
      </div>
    </footer>
  );
};

RSVP.propTypes = {
  setRSVPHeight: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RSVP);
