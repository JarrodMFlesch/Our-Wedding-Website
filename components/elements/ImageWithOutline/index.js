import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Parallax from '../Parallax';

import './index.scss';

const mapStateToProps = state => ({
  windowWidth: state.windowWidth,
});

const baseClass = 'image-with-outline';

class ImageWithOutline extends Component {
  constructor() {
    super();

    this.imageRef = React.createRef();

    this.state = {
      imageHeight: null,
      imageWidth: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { windowWidth } = this.props;
    if (prevProps.windowWidth !== windowWidth) {
      this.calcImageHeight();
    }
  }

  calcImageHeight = () => {
    const { offsetHeight: imageHeight, offsetWidth: imageWidth } = this.imageRef.current;
    this.setState({ imageHeight, imageWidth });
  }


  render() {
    const { image, alignment, className, outlineColor, useOutline } = this.props;
    const { imageHeight, imageWidth } = this.state;

    const outlineStyles = {
      height: `${imageHeight}px`,
      width: `${imageWidth}px`,
      borderColor: `${outlineColor}`,
    };

    const classes = [
      baseClass,
      alignment && `${baseClass}--${alignment}`,
      className && className,
    ].filter(Boolean).join(' ');

    return (
      <div className={classes}>
        <Parallax speed={0.35}>
          <img
            className={`${baseClass}__image`}
            src={image}
            alt=""
            ref={this.imageRef}
            onLoad={this.calcImageHeight}
          />
        </Parallax>
        {useOutline
          && (
            <div style={outlineStyles} className={`${baseClass}__offset-outline`} />
          )
        }
      </div>
    );
  }
}

ImageWithOutline.defaultProps = {
  alignment: 'left',
  className: '',
  outlineColor: '#82958C',
  useOutline: false,
};

ImageWithOutline.propTypes = {
  image: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['left', 'right']),
  outlineColor: PropTypes.string,
  className: PropTypes.string,
  windowWidth: PropTypes.number.isRequired,
  useOutline: PropTypes.bool,
};

export default connect(mapStateToProps)(ImageWithOutline);
