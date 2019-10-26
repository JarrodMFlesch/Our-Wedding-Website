import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Slider from 'react-slick';
import PrevNextSlide from '../../../controls/PrevNextSlide';

import Row from '../../../layout/Row';
import Column from '../../../layout/Column';
import Card from './Card';

import './index.scss';

const baseClass = 'questions';

const mapStateToProps = browser => ({
  windowWidth: browser.windowWidth,
});

const questionSetArray = [
  {
    title: 'Where did we first meet?',
    answers: [
      {
        text: 'Working at Culvers',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'At Lakeview',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Jarrod played hockey with Collin',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Through mutual friends',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'What is our favorite brewery?',
    answers: [
      {
        text: 'Founders',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Dark Horse',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Perrin',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'New Holland',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'What is the name of our oldest dog?',
    answers: [
      {
        text: 'Maverick',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Merlen',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'Cooper',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Oliver',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'What\'s something we cannot live without',
    answers: [
      {
        text: 'Our dogs',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'Our phones',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Coffee in the morning',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Not sure',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'Where was our first date?',
    answers: [
      {
        text: 'Krystal Falls mini golf',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'Movie theater in Battle Creek',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: '',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: '',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'How long have we been dating?',
    answers: [
      {
        text: '3 years',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: '7 years',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: '5 years',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: '10 years',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'What is one of our favorite TV shows?',
    answers: [
      {
        text: 'Survivor',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'American Idol',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: '',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: '',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'Our birthdays are in what months?',
    answers: [
      {
        text: 'Apr/Jan',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'Jun/Aug',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Dec/May',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Mar/Dec',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    title: 'Where was the proposal?',
    answers: [
      {
        text: 'Downtown Grand Rapids',
        isCorrect: true,
        isSelected: false,
      },
      {
        text: 'Hometown, Battle Creek',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Grand Ravines Dog Park',
        isCorrect: false,
        isSelected: false,
      },
      {
        text: 'Mackinac Island',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
];

function Questions(props) {
  const { windowWidth } = props;
  const sliderRef = useRef();
  const [forcedUpdateTicker, setForcedUpdateTicker] = useState(0);
  const [forcedUpdateSwipeDirection, setforcedUpdateSwipeDirection] = useState(null);
  const [isNextSlideEnabled, setIsNextSlideEnabled] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [tallestCard, setTallestCard] = useState(0);

  const sliderSettings = {
    dots: false,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    onSwipe: (direction) => {
      setForcedUpdateTicker(forcedUpdateTicker + 1);
      setforcedUpdateSwipeDirection(direction);
    },
  };

  const handleSelection = useCallback(
    (currentQuestion, selectedAnswer) => {
      console.log(currentQuestion, selectedAnswer);
      // check to see if the answer is correct
      const selectionIsCorrect = questionSetArray[currentQuestion].answers[selectedAnswer].isCorrect;
      console.log(selectionIsCorrect);
    },
    [],
  );

  return (
    <Row className={baseClass}>
      <Column span={12}>
        <div className="slider-wrap">
          <Slider {...sliderSettings} ref={sliderRef}>
            {questionSetArray.map((questionSet, currentQuestionIndex) => {
              return (
                <Row key={`row-${currentQuestionIndex}`}>
                  <Column span={12}>
                    <h4>{questionSet.title}</h4>
                  </Column>

                  <Column span={12}>
                    <div className={`${baseClass}__row-wrap`}>
                      <Row>
                        {questionSetArray[currentQuestionIndex].answers.map((answer, answerIndex) => (
                          <Card
                            key={answerIndex}
                            handleSelection={() => handleSelection(currentQuestionIndex, answerIndex)}
                            currentQuestion={currentQuestionIndex}
                            answer={answer}
                            questionNumber={answerIndex}
                            currentTallestCard={tallestCard}
                            setTallestCard={setTallestCard}
                          />
                        ))}
                      </Row>
                    </div>
                  </Column>
                </Row>
              );
            })}
          </Slider>
        </div>
      </Column>

      <Column span={12} justify="end" s>
        <PrevNextSlide
          className={`${baseClass}__navigation`}
          slideCount={questionSetArray.length}
          animationTime={sliderSettings.speed}
          sliderRef={sliderRef}
          forcedUpdateTicker={forcedUpdateTicker}
          forcedUpdateSwipeDirection={forcedUpdateSwipeDirection}
          forcedUpdateType="swipe"
          autoRotate
          onChange={index => setCurrentSetIndex(index)}
          isNextSlideEnabled={isNextSlideEnabled}
        />
      </Column>
    </Row>
  );
}

Questions.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Questions);
