import React from 'react';

import Row from '../Row';
import Column from '../Column';
import SiteWidth from '../SiteWidth';

import './index.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <SiteWidth>
        <Row>
          <Column span={8} midBreak={12}>
            <h4 className="footer-text">Looking to RSVP online and save a few tree branches?</h4>
          </Column>

          <Column span={4} midBreak={12}>
            <div className="footer-rsvp-wrap">
              <a href="/">
                <button className="footer-rsvp">RSVP</button>
              </a>
            </div>
          </Column>
        </Row>
      </SiteWidth>
    </footer>
  );
};

export default Footer;
