import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { FB_PIXEL_ID } from "shared-constant/fbPixelKey";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet preload"
          as="style"
        />

        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
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
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js" strategy="beforeInteractive" />
        {process.env.NODE_ENV === "production" && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="facebook pixel 이미지"
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
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
