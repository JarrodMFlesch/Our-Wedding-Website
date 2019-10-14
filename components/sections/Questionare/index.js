import React from 'react';

import Row from '../../layout/Row';
import Column from '../../layout/Column';

import Questions from './Questions';

import './index.scss';

const baseClass = 'questionare';

const Questionare = () => {
  return (
    <div className={baseClass}>
      <Row className={`${baseClass}__heading`}>
        <Column span={12}>
          <h3>
            How well do you know us?
            &nbsp;
            <span className="h4" role="img" aria-label="winking smiley face">😉</span>
          </h3>
        </Column>
      </Row>

      <Row className={`${baseClass}__question`}>
        <Column span={12}>
          <Questions />
        </Column>
      </Row>
    </div>
  );
};

export default Questionare;
