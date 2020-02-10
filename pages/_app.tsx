import App, { AppContext } from 'next/app';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const {
  publicRuntimeConfig: {
    env: { NODE_ENV }
  }
} = getConfig();

interface AppProps {
  nodeEnv: string;
  currentRoute: string;
  pageProps: Record<string, string>;
}

class SkylabApp extends App<AppProps> {
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);

    return {
      currentRoute: appContext.ctx.pathname,
      nodeEnv: NODE_ENV,
      ...appProps
    };
  }

  render() {
    const { Component, currentRoute, nodeEnv, ...pageProps } = this.props;
    console.log('All App render props:', this.props);
    return (
      <>
        <Head>
          <title>{`${nodeEnv} - ${currentRoute}`}</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </>
    );
  }
}

export default SkylabApp;
