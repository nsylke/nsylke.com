import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            id="chiffre:analytics"
            src="https://chiffre.io/analytics.js"
            data-chiffre-project-id="XcurqKJ2W88TtMfG"
            data-chiffre-public-key="pk.jFCeiBdCsp-tHML41Qp3Ogwgrv14rOP-Rp6RJ2wwFGE"
            referrerpolicy="origin"
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
