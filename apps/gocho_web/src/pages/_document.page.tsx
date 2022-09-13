import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600&display=optional"
          rel="stylesheet preload prefetch"
          as="style"
          type="text/css"
        />
      </Head>
      <body>
        <div id="portal" />
        <div id="toast" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
