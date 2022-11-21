import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import ReactGA from "react-ga4";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Global } from "@emotion/react";
import { datadogRum } from "@datadog/browser-rum";

import { KEY } from "shared-constant/gaKey";
import { FB_PIXEL_ID } from "shared-constant/fbPixelKey";

import { GNB } from "@component/global/gnb";
import { Footer } from "@component/global/footer";
import { ModalPlaceholder } from "@component/common/organisms/modal/modalPlaceHolder";
import { ToastPlaceholder } from "@component/toast/toastPlaceholder";

import { globalStyles } from "@style/globalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "d5f1a305-fd71-4a93-ac57-c335dce26d07",
    clientToken: "pub63fb692ac2e701e2a7183d0d7b03167e",
    site: "datadoghq.com",
    service: "gocho-mobile",

    version: "0.0.1",
    sampleRate: 30,
    sessionReplaySampleRate: 10,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });
  datadogRum.startSessionReplayRecording();
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize(KEY);
  const router = useRouter();

  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 15000,
          refetchOnWindowFocus: false,
          keepPreviousData: true,
          retry: 0,
          onError: (error) => {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
              router.push("/404");
            }
            if (axios.isAxiosError(error) && error.response?.status === 500) {
              router.push("/500");
            }
          },
        },
      },
    });
  });

  useEffect(() => {
    const isDesktop = ![
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
      /Mobile/i,
    ].some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
    const isVercel = window.location.href.includes("vercel");
    const isLocal = window.location.href.includes("localhost");

    if (isVercel || isLocal) {
      return;
    }
    if (isDesktop) {
      const { host, pathname, protocol, search } = window.location;
      const desktopHost = host.slice(host.indexOf(".") + 1);
      window.location.href = `${protocol}//${desktopHost}${pathname}${search}`;
    }
  }, []);

  useEffect(() => {
    const pageview = () => {
      window.fbq("track", "PageView");
    };
    pageview();

    const handleRouteChange = () => {
      pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    window.Kakao.init("0687bed33c060c4758f582d26ff44e16");
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FB_PIXEL_ID});
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Global styles={globalStyles} />
          <ModalPlaceholder />
          <ToastPlaceholder />
          <GNB />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
