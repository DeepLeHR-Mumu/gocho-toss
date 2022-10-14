import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Global } from "@emotion/react";

import { GNB } from "@component/global/gnb";
import { Footer } from "@component/global/footer";
import { ModalPlaceholder } from "@component/common/organisms/modal/modalPlaceHolder";
import { ToastPlaceholder } from "@component/toast/toastPlaceholder";

import { globalStyles } from "@style/globalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { datadogRum } from "@datadog/browser-rum";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "d5f1a305-fd71-4a93-ac57-c335dce26d07",
    clientToken: "pub63fb692ac2e701e2a7183d0d7b03167e",
    site: "datadoghq.com",
    service: "gocho-mobile",

    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });
  datadogRum.startSessionReplayRecording();
}

function MyApp({ Component, pageProps }: AppProps) {
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
      const currentLocation = window.location.href.slice(window.location.href.indexOf(".") + 1);
      window.location.href = `https://${currentLocation}`;
    }
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
