import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { reduxWrapper } from 'logic/store';
import 'src/styles/global.scss';

const WrappedApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default reduxWrapper.withRedux(WrappedApp);
