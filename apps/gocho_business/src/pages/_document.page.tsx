import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <div id="modalPortal" />
        <div id="toastPortal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
