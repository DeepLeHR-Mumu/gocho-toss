import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Script from "next/script";
import axios from "axios";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { datadogRum } from "@datadog/browser-rum";
import ReactGA from "react-ga4";

import { KEY, FB_PIXEL_ID } from "shared-constant";
import { useAxiosInterceptor } from "shared-api/axiosInstance";

import { Header } from "@component/global/header";
import { Footer } from "@component/global/footer";
import { Aside } from "@component/global/aside";
import { ModalPlaceholder } from "@component/modal/modalPlaceHolder";
import { ToastPlaceholder } from "@component/toast/toastPlaceholder";

import { globalStyle } from "../style/globalStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "e4f4a9e9-315d-4f9d-941c-2a4b52455b58",
    clientToken: "pub98f9201040940ffceb0d8d3e9b11e9d4",
    site: "datadoghq.com",
    service: "gocho-web",

    version: "0.0.2",
    sampleRate: 20,
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

function UserPCService({ Component, pageProps }: AppProps) {
  const router = useRouter();
  ReactGA.initialize(KEY);

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
    const isMobile = [
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

    if (isVercel || isLocal || !isMobile) {
      return;
    }

    const { host, pathname, protocol, search } = window.location;
    if (host.includes("www")) {
      const mobileHost = host.slice(host.indexOf(".") + 1);
      window.location.href = `${protocol}//m.${mobileHost}${pathname}${search}`;
      return;
    }
    window.location.href = `${protocol}//m.${host}${pathname}${search}`;
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
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("0687bed33c060c4758f582d26ff44e16");
    }
  }, []);

  useAxiosInterceptor();

  // eslint-disable-next-line no-console
  console.log(pageProps.dehydratedState);

  return (
    <>
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
          <Global styles={globalStyle} />
          <ModalPlaceholder />
          <ToastPlaceholder />
          <Header />
          <Component {...pageProps} />
          <Aside />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default UserPCService;
