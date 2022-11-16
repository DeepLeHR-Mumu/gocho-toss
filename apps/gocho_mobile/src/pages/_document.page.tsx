import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { FB_PIXEL_ID } from "shared-constant/fbPixelKey";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet preload"
          as="style"
        />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="beforeInteractive" />
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
