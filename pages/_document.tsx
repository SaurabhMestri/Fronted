import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
      <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
      </Head>
     
      <body>
        <Main />
        <NextScript />
      <script src="../main"></script>
      </body>
    </Html>
  );
}
