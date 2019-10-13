import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questionare extends Component {
  constructor() {
    super();

    this.state = {
      currentCardsIndex: 0,
    };
  }

  render() {
    const { currentCardsIndex } = this.state;

    return (
      <div>
        <h3>How well do you know us!?</h3>
        <div />
        <p>
          Questionare&nbsp;
          {currentCardsIndex}
        </p>
      </div>
    );
  }
}

export default Questionare;
