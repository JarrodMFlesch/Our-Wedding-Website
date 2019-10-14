import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from '../../../layout/Row';
import Column from '../../../layout/Column';

import './index.scss';

const baseClass = 'questions';

const questionsArray = [
  {
    title: 'Where did we first meet?',
    answers: [
      {
        text: 'Working at Culvers',
        isCorrect: true,
      },
      {
        text: 'At Lakeview',
        isCorrect: false,
      },
      {
        text: 'Jarrod played hockey with Collin',
        isCorrect: false,
      },
      {
        text: 'Through mutual friends',
        isCorrect: false,
      },
    ],
  },
];

const Cards = (props) => {
  const { answers, handleSelection } = props;
  return answers.map((answer, index) => {
    return (
      <Column span={3} key={`answer-${index}`}>
        <div className={`${baseClass}__question-card`}>
          <span className="card-number">{index + 1}</span>
          <button type="button" onClick={() => handleSelection(answer.isCorrect)}>
            <p>{answer.text}</p>
          </button>
        </div>
      </Column>
    );
  });
};

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      currentQuestionIndex: 0,
    };
  }

  handleSelection = (isAnswerCorrect) => {
    if (isAnswerCorrect) {
      alert('You are too smart, this section is incomplete though 😃');
    }
  }

  render() {
    const { currentQuestionIndex } = this.state;

    return (
      questionsArray.map((question, index) => {
        return (
          <div key={`question-${index}`} className={baseClass}>
            <Row>
              <Column span={12} className={`${baseClass}__question-text`}>
                <h4>{question.title}</h4>
              </Column>

              <Cards handleSelection={this.handleSelection} answers={question.answers} />

              <Column span={12}>
                <div className={`${baseClass}__navigation`}>
                  <span>{'< '}</span>
                  <span>{'>'}</span>
                </div>
              </Column>
            </Row>
          </div>
        );
      })
    );
  }
}

export default Questions;
