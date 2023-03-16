import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

type Props = {};

const Document: React.FunctionComponent<Props> = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
