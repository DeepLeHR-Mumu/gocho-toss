import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import axios from "axios";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { datadogRum } from "@datadog/browser-rum";

import { useAxiosInterceptor } from "@/apis";
import { ToastPlaceholder, PrivateRouteLayout, ModalPlaceholder, ErrorBoundary } from "@/components";
import { GA_KEY, INTERNAL_URL } from "@/constants";
import { globalStyle } from "@/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

if (typeof window !== "undefined" && !window.location.href.includes("localhost")) {
  datadogRum.init({
    applicationId: "ae36adeb-77ea-4c17-8d46-e239927462e4",
    clientToken: "pub1d76d0d423237f4598a55e6205dbc303",
    site: "datadoghq.com",
    service: "gocho-business",

    version: "0.0.2",
    sampleRate: 80,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  });

  datadogRum.startSessionReplayRecording();
}

function BusinessService({ Component, pageProps }: AppProps) {
  ReactGA.initialize(GA_KEY);

  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
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
      })
  );

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (router.pathname !== INTERNAL_URL.MOBILE && isMobile) {
      router.replace(INTERNAL_URL.MOBILE);
    }

    const prevUrl = sessionStorage.getItem("currentUrl");
    sessionStorage.setItem("prevUrl", prevUrl || "none");
    sessionStorage.setItem("currentUrl", router.asPath);
  }, [router]);

  useAxiosInterceptor();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        <ErrorBoundary>
          <PrivateRouteLayout>
            <Component {...pageProps} />
          </PrivateRouteLayout>
          <ModalPlaceholder />
          <ToastPlaceholder />
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default BusinessService;
