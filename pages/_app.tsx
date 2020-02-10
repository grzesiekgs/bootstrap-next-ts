import App, { AppContext } from 'next/app';
import React from 'react';

interface AppProps {
  pageProps: Record<string, string>;
}

class SkylabApp extends App<AppProps> {
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps
    };
  }

  render() {
    const { Component, ...pageProps } = this.props;
    console.log('All App render props:', this.props);
    return <Component {...pageProps} />;
  }
}

export default SkylabApp;
