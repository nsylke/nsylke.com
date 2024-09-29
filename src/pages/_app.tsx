import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import React from "react";

import "@/styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <DefaultSeo
        title="Nicholas Sylke"
        description="Nicholas Sylke - React, Next.js, TypeScript, and Rust"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://nsylke.me",
          site_name: "Nicholas Sylke",
        }}
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
