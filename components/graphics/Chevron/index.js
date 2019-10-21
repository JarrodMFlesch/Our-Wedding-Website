import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ className }) => {
  const baseClass = 'chevron';
  const classes = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <svg className={classes} width="11px" height="22px" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg">
      <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        <g id="Desktop" transform="translate(-1615.000000, -2704.000000)" stroke="#353635" strokeWidth="2">
          <g id="Questionare" transform="translate(250.000000, 2278.000000)">
            <g id="__buttons" transform="translate(1289.000000, 413.000000)">
              <g id="Group-13" transform="translate(55.000000, 0.000000)">
                <g id="Group-12" transform="translate(28.000000, 24.000000) scale(-1, 1) translate(-28.000000, -24.000000) translate(22.000000, 14.000000)">
                  <path d="M0.5,9.5 L10.5,0.5" id="Line" />
                  <path d="M1,19 L11,10" id="Line" transform="translate(6.000000, 14.500000) scale(1, -1) translate(-6.000000, -14.500000) " />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Chevron;
