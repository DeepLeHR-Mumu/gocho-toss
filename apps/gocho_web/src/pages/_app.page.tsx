import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { useRouter } from "next/router";
import Head from "next/head";
import ReactGA from "react-ga4";

import { TEST_KEY } from "shared-constant/gaKey";

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
  ReactGA.initialize(TEST_KEY);

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
