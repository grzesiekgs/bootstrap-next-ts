import Document, { Main, NextScript, Head } from 'next/document';
import React from 'react';
import { WrappedDocumentContext } from '../@types/next';

export interface AppDocumentProps {}

export default class AppDocument extends Document<AppDocumentProps> {
  static async getInitialProps(ctx: WrappedDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name={'viewport'} content={'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
