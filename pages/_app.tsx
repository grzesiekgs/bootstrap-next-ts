import { AppProps } from 'next/app';
import React, { FunctionComponent } from 'react';
import { reduxWrapper } from '../logic/store';

const WrappedApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default reduxWrapper.withRedux(WrappedApp);
