import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Chevron from '../../graphics/Chevron';

import './index.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef(false);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      console.log('tick');
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function PrevNextSlide(props) {
  const {
    className,
    slideCount: initialSlideCount,
    animationTime,
    autoRotate,
    autoRotateTimer,
    sliderRef,
    onChange,
    forcedUpdateIndex,
    forcedUpdateType,
    forcedUpdateSwipeDirection,
    forcedUpdateTicker,
    isNextSlideEnabled,
  } = props;

  const [currentSlideIndex, setCurrentIndex] = useState(0);
  const [prevSlideIndex, setPrevIndex] = useState(initialSlideCount.length - 1);
  const [nextSlideIndex, setNextIndex] = useState(1);
  const [isOnFirst, setIsOnFirst] = useState(true);
  const [isOnLast, setIsOnLast] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getPrevIndex = (index) => {
    return index - 1 < 0 ? initialSlideCount - 1 : index - 1;
  };

  const getNextIndex = (index) => {
    return index + 1 > initialSlideCount - 1 ? 0 : index + 1;
  };

  // if (autoRotate) {
  //   useInterval(() => setCurrentIndex(nextSlideIndex + 1), animationTime);
  // }

  useEffect(() => {
    sliderRef.current.slickGoTo(currentSlideIndex);

    setPrevIndex(getPrevIndex(currentSlideIndex));
    setNextIndex(getNextIndex(currentSlideIndex));
    setIsOnFirst(currentSlideIndex === 0);
    setIsOnLast(currentSlideIndex === initialSlideCount - 1);

    if (onChange && typeof onChange === 'function') {
      onChange(currentSlideIndex);
    }

    return () => {
      setIsTransitioning(true);
    };
  }, [currentSlideIndex]);

  const getIndexFromDirection = (direction) => {
    if (direction === 'left') {
      return getNextIndex(currentSlideIndex);
    }

    if (direction === 'right') {
      return getPrevIndex(currentSlideIndex);
    }

    return null;
  };

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      if (isTransitioning) setIsTransitioning(false);
    }, animationTime);

    return () => {
      clearTimeout(transitionTimer);
    };
  }, [isTransitioning]);

  useEffect(() => {
    if (forcedUpdateType === 'index') {
      setCurrentIndex(forcedUpdateIndex);
      return;
    }

    if (forcedUpdateType === 'swipe' && forcedUpdateSwipeDirection) {
      setCurrentIndex(getIndexFromDirection(forcedUpdateSwipeDirection));
    }
  }, [forcedUpdateTicker]);

  const baseClass = 'prev-next';

  const classes = [
    className,
    baseClass,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <button
        className={`${baseClass}__prev${isOnFirst ? ` ${baseClass}__prev--is-inactive` : ''}`}
        onClick={() => (!isOnFirst && !isTransitioning) && setCurrentIndex(prevSlideIndex)}
        type="button"
        aria-label="Previous Slide"
      >
        <Chevron />
      </button>

      <button
        className={`${baseClass}__next${(isOnLast || !isNextSlideEnabled) ? ` ${baseClass}__next--is-inactive` : ''}`}
        onClick={() => (!isOnLast && !isTransitioning && isNextSlideEnabled) && setCurrentIndex(nextSlideIndex)}
        type="button"
        aria-label="Next Slide"
      >
        <Chevron />
      </button>
    </div>
  );
}

PrevNextSlide.defaultProps = {
  slideCount: 2,
  animationTime: 400,
  forcedUpdateTicker: undefined,
  forcedUpdateType: undefined,
  forcedUpdateIndex: undefined,
  forcedUpdateSwipeDirection: undefined,
  className: '',
  onChange: undefined,
  autoRotate: false,
  autoRotateTimer: 1000,
  isNextSlideEnabled: true,
};

PrevNextSlide.propTypes = {
  slideCount: PropTypes.number,
  animationTime: PropTypes.number,
  forcedUpdateTicker: PropTypes.number,
  forcedUpdateType: PropTypes.oneOf([
    'index',
    'swipe',
  ]),
  forcedUpdateIndex: PropTypes.number,
  forcedUpdateSwipeDirection: PropTypes.oneOf([
    'left',
    'right',
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  sliderRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  autoRotate: PropTypes.bool,
  autoRotateTimer: PropTypes.number,
  isNextSlideEnabled: PropTypes.bool,
};

export default PrevNextSlide;
