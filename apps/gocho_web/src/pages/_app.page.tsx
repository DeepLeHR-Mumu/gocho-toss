import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { useRouter } from "next/router";
import Head from "next/head";
import ReactGA from "react-ga4";

import { KEY } from "shared-constant/gaKey";

import { globalStyles } from "src/style/globalStyle";
import { Header } from "@component/global/header";
import { Footer } from "@component/global/footer";
import { Aside } from "@component/global/aside";
import { ModalPlaceholder } from "@component/modal/modalPlaceHolder";
import { ToastPlaceholder } from "@component/toast/toastPlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { datadogRum } from "@datadog/browser-rum";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "e4f4a9e9-315d-4f9d-941c-2a4b52455b58",
    clientToken: "pub98f9201040940ffceb0d8d3e9b11e9d4",
    site: "datadoghq.com",
    service: "gocho-web",

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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  ReactGA.initialize(KEY);

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

  // host : localhost:3000
  // origin : http://localhost:3000
  // pathname: /
  // protocol : http:

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

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Global styles={globalStyles} />
          <ModalPlaceholder />
          <ToastPlaceholder />
          <Header />
          <Component {...pageProps} />
          <Aside />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
