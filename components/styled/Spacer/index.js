import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const baseClass = 'spacer';

const Spacer = (props) => {
  const { size } = props;

  const classes = [
    baseClass,
    size && `${baseClass}--${size}`,
  ].filter(Boolean).join(' ');

  return <div className={classes} />;
};

Spacer.defaultProps = {
  size: 'small',
};

Spacer.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Spacer;
