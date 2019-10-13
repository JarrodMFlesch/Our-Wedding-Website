import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import SiteWidth from '../SiteWidth';

import './index.scss';

const mapDispatchToProps = dispatch => ({
  setHeaderHeight: height => dispatch({ type: 'SET_HEADER_HEIGHT', payload: height }),
});

const mapStateToProps = state => ({
  windowWidth: state.windowWidth,
  scrollPos: state.scrollPos,
});

class Header extends Component {
  baseClass = 'header';

  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    this.measureHeaderHeight();
  }

  componentWillReceiveProps(prevProps) {
    const { windowWidth } = this.props;
    if (prevProps.windowWidth !== windowWidth) {
      this.measureHeaderHeight();
    }
  }

  measureHeaderHeight = () => {
    const { setHeaderHeight } = this.props;
    setHeaderHeight(this.headerRef.current.offsetHeight);
  }

  render() {
    const { scrollPos } = this.props;
    const shouldShowShadow = scrollPos > 100;

    const classes = [
      this.baseClass,
      shouldShowShadow && `${this.baseClass}--show-shadow`,
    ].filter(Boolean).join(' ');

    return (
      <header className={classes} ref={this.headerRef}>
        <SiteWidth className={`${this.baseClass}-wrap`}>
          <h6 className={`${this.baseClass}__logo`}>Jarrod & Alexandria</h6>
        </SiteWidth>
      </header>
    );
  }
}

Header.propTypes = {
  setHeaderHeight: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  scrollPos: PropTypes.number.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
