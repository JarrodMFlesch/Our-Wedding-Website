import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const baseClass = 'spacer';

const Spacer = (props) => {
  const { size, customSize } = props;

  const spacerStyle = {};
  if (customSize) {
    spacerStyle.height = `${customSize}px`;
  }

  const classes = [
    baseClass,
    size && `${baseClass}--${size}`,
  ].filter(Boolean).join(' ');

  return <div className={classes} style={spacerStyle} />;
};

Spacer.defaultProps = {
  size: 'small',
  customSize: null,
};

Spacer.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customSize: PropTypes.number,
};

export default Spacer;
