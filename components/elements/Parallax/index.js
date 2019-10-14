import React, { Component } from 'react';
import { connect } from 'react-redux';

import getOffsetTop from '../../../utilities/getOffsetTop';

const mapStateToProps = state => ({
  scrollPos: state.scrollPos,
  windowHeight: state.windowHeight,
});

class Parallax extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetTop: null,
      style: {},
    };

    this.wrapRef = React.createRef();
  }

  componentDidMount() {
    this.setStyles();
  }

  componentDidUpdate(prevProps) {
    const { scrollPos, windowHeight } = this.props;

    if (prevProps.scrollPos !== scrollPos || prevProps.windowHeight !== windowHeight) {
      this.setStyles();
    }
  }

  setStyles() {
    const { windowHeight, scrollPos, speed } = this.props;
    const { offsetTop: stateOffsetTop } = this.state;

    if (this.wrapRef.current && windowHeight) {
      const offsetTop = getOffsetTop(this.wrapRef.current);
      const min = offsetTop;
      const max = offsetTop + windowHeight;
      const pos = (((scrollPos - min) / (max - min)) * 100).toFixed(3);
      const capped = Math.min(Math.max(pos, -300), 300);
      const transform = capped * speed * -1;
      const style = {
        willChange: 'transform',
        transform: `translate3d(0, ${transform}%, 0)`,
        transition: stateOffsetTop !== null ? 'all 700ms cubic-bezier(0, 0, 0.2, 1)' : undefined,
      };
      this.setState({ offsetTop, style });
    }
  }

  render() {
    const { className, children } = this.props;
    const { style } = this.state;
    const classes = className ? `${className} parallax` : 'parallax';

    return (
      <div ref={this.wrapRef} className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Parallax);
