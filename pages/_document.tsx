import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <meta name="description" content="Nicholas Sylke - Portfolio" />

                    <meta property="og:title" content="Nicholas Sylke" />
                    <meta property="og:description" content="Nicholas Sylke - Portfolio" />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:card" className="summary" />
                    <meta name="twitter:creator" className="@nsylke" />
                    <meta name="twitter:title" className="Nicholas Sylke" />
                    <meta name="twitter:description" className="Nicholas Sylke - Portfolio" />

                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                    <link rel="stylesheet" href="css/normalize.css" />
                    <link rel="stylesheet" href="/css/nprogress.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" />

                    <script src="https://kit.fontawesome.com/491005fb35.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
