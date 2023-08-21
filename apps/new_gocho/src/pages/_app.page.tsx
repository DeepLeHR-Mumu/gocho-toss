import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { datadogRum } from "@datadog/browser-rum";
import ReactGA from "react-ga4";

import { KEY, FB_PIXEL_ID } from "shared-constant";
import { useAxiosInterceptor } from "shared-api/axiosInstance";

import { globalStyle } from "@/styles/globalStyle";
import { GlobalNavigationBar, Footer } from "@/components";
import {} from "@/components/global/Footer";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

function App({ Component, pageProps }: AppProps) {
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
          <GlobalNavigationBar />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
