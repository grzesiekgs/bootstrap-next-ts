import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import Styles from './PageLayout.module.scss';

const {
  publicRuntimeConfig: {
    env: { NODE_ENV }
  }
} = getConfig();

export interface PageLayoutProps {
  title?: string;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ title, children }) => (
  <main className={Styles.pageLayout}>
    <Head>
      <title>{`${NODE_ENV} - ${title}`}</title>
    </Head>
    {children}
  </main>
);
