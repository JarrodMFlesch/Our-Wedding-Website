import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Row = (props) => {
  const {
    className,
    children,
    disableGutter,
    enableNegativeMargin,
  } = props;

  const baseName = 'row';

  const classes = [
    baseName,
    disableGutter && `${baseName}--gutter-disabled`,
    enableNegativeMargin && `${baseName}--negative-margin-enabled`,
    className,
  ].filter(Boolean).join(' ');

  // conditionally render based on the presence of children to avoid
  // logic duplication on every instance of this component
  if (children) {
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
  return null;
};

Row.defaultProps = {
  className: '',
  disableGutter: false,
  enableNegativeMargin: false,
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disableGutter: PropTypes.bool,
  enableNegativeMargin: PropTypes.bool,
};

export default Row;
