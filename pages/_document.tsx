import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
      
      </Head>
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
