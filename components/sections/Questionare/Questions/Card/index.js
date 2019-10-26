import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Row from '../../../../layout/Row';
import Column from '../../../../layout/Column';

import './index.scss';

const baseClass = 'question-card';

function Card(props) {
  const {
    handleSelection,
    answer,
    answerIndex,
    questionNumber,
    setTallestCard,
    tallestCard,
  } = props;

  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      if (cardRef.current.offsetHeight > tallestCard) setTallestCard(cardRef.current.offsetHeight);
    }
  }, [tallestCard]);

  return (
    <Column span={3} midBreak={6}>
      <button
        className={baseClass}
        style={{
          minHeight: `${tallestCard}px`,
        }}
        onClick={() => {
          handleSelection(questionNumber, answerIndex);
        }}
        type="button"
        ref={cardRef}
      >
        <span className={`${baseClass}__number`}>{questionNumber + 1}</span>
        <div type="button">
          <p>{answer.text}</p>
        </div>
      </button>
    </Column>
  );
}

Card.defaultProps = {
  answer: {
    isCorrect: false,
    text: '',
  },
  cardNumber: 0,
  rowHeight: 0,
};

Card.propTypes = {
  answer: PropTypes.shape({
    isCorrect: PropTypes.bool,
    text: PropTypes.string,
  }),
  cardNumber: PropTypes.number,
  handleSelection: PropTypes.func.isRequired,
  rowHeight: PropTypes.number,
};

export default Card;
