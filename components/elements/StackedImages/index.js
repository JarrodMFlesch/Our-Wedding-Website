import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

const mapStateToProps = state => ({
  windowWidth: state.windowWidth,
});

const baseClass = 'stacked-images';

class StackedImages extends Component {
  constructor() {
    super();

    this.primaryImageRef = React.createRef();
    this.secondaryImageRef = React.createRef();

    this.state = {
      imageHeight: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { windowWidth } = this.props;
    if (prevProps.windowWidth !== windowWidth) {
      this.calcImageHeight();
    }
  }

  calcImageHeight = () => {
    const { offsetHeight: imageHeight, offsetWidth: imageWidth } = this.primaryImageRef.current;
    this.setState({ imageHeight, imageWidth });
  }


  render() {
    const { primaryImage, secondaryImage, alignment, className } = this.props;
    const { imageHeight, imageWidth } = this.state;

    const classes = [
      baseClass,
      alignment && `${baseClass}--${alignment}`,
      className && className,
    ].filter(Boolean).join(' ');

    return (
      <div className={classes}>
        <img
          className={`${baseClass}__primary-image`}
          src={primaryImage}
          alt=""
          ref={this.primaryImageRef}
        />
        <img
          className={`${baseClass}__secondary-image`}
          src={secondaryImage}
          alt=""
          ref={this.secondaryImageRef}
          onLoad={this.calcImageHeight}
        />
      </div>
    );
  }
}

StackedImages.defaultProps = {
  alignment: 'left',
  className: '',
};

StackedImages.propTypes = {
  primaryImage: PropTypes.string.isRequired,
  secondaryImage: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  windowWidth: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(StackedImages);
