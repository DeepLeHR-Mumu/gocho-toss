import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <div id="portal" />
        <div id="toastPortal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
