import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import PrevNextSlide from '../../controls/PrevNextSlide';

const WeddingParty = () => {
  const [forcedUpdateTicker, setForcedUpdateTicker] = useState(0);
  const [forcedUpdateSwipeDirection, setforcedUpdateSwipeDirection] = useState(null);

  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    speed: 1000,
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipe: true,
    onSwipe: (direction) => {
      setForcedUpdateTicker(forcedUpdateTicker + 1);
      setforcedUpdateSwipeDirection(direction);
    },
  };

  return (
    <div>
      <h3>Wedding party information to come</h3>
      <Slider {...sliderSettings} ref={sliderRef}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((slide, index) => {
          return (
            <div>
              <p>{`Party member ${index}`}</p>
            </div>
          );
        })}
      </Slider>

      <PrevNextSlide
        infiniteScroll
        sliderRef={sliderRef}
        slideCount={8}
        forcedUpdateTicker={forcedUpdateTicker}
        forcedUpdateSwipeDirection={forcedUpdateSwipeDirection}
        forcedUpdateType="swipe"
        isNextSlideEnabled
      />
    </div>
  );
};

export default WeddingParty;
