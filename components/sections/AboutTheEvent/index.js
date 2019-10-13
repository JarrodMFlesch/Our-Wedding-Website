import React from 'react';
import PropTypes from 'prop-types';

import Row from '../../layout/Row';
import Column from '../../layout/Column';
import StackedImages from '../../elements/StackedImages';

import './index.scss';

const baseClass = 'about-the-event';

const AboutTheEvent = (props) => {
  return (
    <Row>
      <Column span={6} midBreak={12}>
        <StackedImages
          primaryImage="/static/img/brew-ya-tall.jpg"
          secondaryImage="/static/img/brew-ya-tall.jpg"
          alignment="left"
        />
      </Column>

      <Column className={`${baseClass}__information`} span={6} midBreak={12}>
        <div>
          <h2>About the event</h2>
          <h4>Location</h4>
          <p>Blue Heron Barn</p>
          <p>6464 South 32nd Street, Kalamazoo, MI 49048</p>
          <h4>Date & Time</h4>
          <p>
            June 20
            <sup>th</sup>
            &nbsp;
            2020 at 2PM
          </p>
          <h4>Attire</h4>
          <p>some other content</p>
          <h4>Other note</h4>
          <p>some other content</p>
          <h4>Other note</h4>
          <p>some other content</p>
          <h4>Other note</h4>
          <p>some other content</p>
        </div>
      </Column>
    </Row>
  );
};

export default AboutTheEvent;
