import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import React from 'react';

export interface AppDocumentProps {}

export default class AppDocument extends Document<AppDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
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
