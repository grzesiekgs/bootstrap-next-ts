import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { AppContext } from 'next/app';
import React from 'react';
import { AppActions } from '../logic/app/actions';
import { useStore } from '../logic/store';

interface AppProps {
  pageProps: Record<string, string>;
}

class NextApp extends App<AppProps> {
  static async getInitialProps(appContext: AppContext) {
    // If You need to execute some action while initializing every view, then You should do it out there.
    // It could be async (eg. data fetching) or sync (eg. store.dispatch) action.
    const appProps = await App.getInitialProps(appContext);
    // Dispatch any redux action which should be performed on app init.
    appContext.ctx.store.dispatch(AppActions.setInitialized(true));

    return {
      ...appProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withRedux(initializeStore)(withReduxSaga(NextApp));
