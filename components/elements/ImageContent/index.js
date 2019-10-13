import React from 'react';
import PropTypes from 'prop-types';

import Row from '../../layout/Row';
import Column from '../../layout/Column';

import './index.scss';

const baseClass = 'image-content';

const ImageContent = (props) => {
  const {
    className,
    imagePath,
    imageAlignment,
    children,
    overlayText,
  } = props;

  const classes = [
    baseClass,
    imageAlignment && `${baseClass}--align-${imageAlignment}`,
    overlayText && `${baseClass}--overlay-text`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Row className={`${classes}`} flex>
      <Column className={`${baseClass}__content`}>
        {children}
      </Column>

      <Column className={`${baseClass}__image`}>
        <img src={imagePath} alt="Engagement of Allie and Jarrod" />
      </Column>
    </Row>
  );
};

ImageContent.defaultProps = {
  imageAlignment: 'left',
  className: '',
  overlayText: false,
};

ImageContent.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageAlignment: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayText: PropTypes.bool,
};

export default ImageContent;
