import React, { useState, useEffect, useRef } from 'react';
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
  {
    title: 'Who am I',
    answers: [
      {
        text: 'Ans 1',
        isCorrect: true,
      },
      {
        text: 'Ans 2',
        isCorrect: false,
      },
      {
        text: 'Ans 3',
        isCorrect: false,
      },
      {
        text: 'Ans 4',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'Who am I',
    answers: [
      {
        text: 'Ans 1',
        isCorrect: true,
      },
      {
        text: 'Ans 2',
        isCorrect: false,
      },
      {
        text: 'Ans 3',
        isCorrect: false,
      },
      {
        text: 'Ans 4',
        isCorrect: false,
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

  return (
    <Row className={baseClass}>
      <Column span={12}>
        <div className="slider-wrap">
          <Slider {...sliderSettings} ref={sliderRef}>
            {questionSetArray.map((questionSet, index) => {
              return (
                <Row key={`row-${index}`}>
                  <Column span={12}>
                    <h4>{questionSet.title}</h4>
                  </Column>

                  <Column span={12}>
                    <div className={`${baseClass}__row-wrap`}>
                      <Row>
                        {questionSetArray[index].answers.map((answer, cardIndex) => (
                          <Card
                            key={cardIndex}
                            handleSelection={setIsNextSlideEnabled}
                            answer={answer}
                            cardNumber={cardIndex}
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
