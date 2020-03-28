import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Router from 'next/router';
import { animateScroll } from 'react-scroll';
import makeStore from '../redux/store';
import Error from './_error';

import Header from '../components/layout/Header';
import RSVP from '../components/sections/RSVP';
import HeaderSpacer from '../components/layout/HeaderSpacer';
import LoadingIndicator from '../components/elements/LoadingIndicator';
import WindowSize from '../components/utilities/WindowSize';
import MeasureScroll from '../components/utilities/MeasureScroll';

import '../scss/app.scss';

const transTime = 1000; // mirror this value with the stylesheet

class WeddingApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { store, req } = ctx;
    const state = store.getState();

    // ===========================
    // GET NESTED INITIAL PROPS
    // ===========================

    // If rendered page has getInitialProps, get 'em
    const componentProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // If a rendered page has returned a status greater than 400,
    // Get error page data
    if (componentProps.status && componentProps.status >= 400) {
      return {
        status: componentProps.status,
        errorData: await Error.getInitialProps(ctx, componentProps.status),
      };
    }

    return { componentProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      transitionIn: true,
      showLoadingIndicator: false,
    };
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => {
      animateScroll.scrollToTop({ duration: '400ms' });
      this.setState({ transitionIn: false, showLoadingIndicator: true });
    });
    Router.events.on('routeChangeComplete', () => this.setState({ transitionIn: true, showLoadingIndicator: false }));
  }

  render() {
    const {
      Component,
      componentProps,
      store,
      status,
      errorData,
    } = this.props;

    const { transitionIn, showLoadingIndicator } = this.state;

    return (
      <Provider store={store}>
        <Header />
        <HeaderSpacer />
        <div className="page">
          <CSSTransition in={transitionIn} timeout={transTime} classNames="page_transition-wrap">
            <div className="page_transition-wrap">
              {status >= 400 ? <Error {...errorData} status={status} /> : <Component {...componentProps} />}
            </div>
          </CSSTransition>
        </div>
        <RSVP />
        <WindowSize />
        <MeasureScroll />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(WeddingApp);
