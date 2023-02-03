import { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import { datadogRum } from "@datadog/browser-rum";

import { KEY } from "shared-constant/gaKey";

import { globalStyle } from "@/styles/globalStyle";
import { useAxiosInterceptor } from "@/apis/useIsRefreshLock";
import { ToastPlaceholder } from "@/components/global/toast/toastPlaceHolder";
import { ModalPlaceholder } from "@/components/global/modal/modalPlaceHolder";
import { PrivateRouteLayout } from "@/components/global/layout/privateRouteLayout";
import { ErrorBoundary } from "@/components/global/errorBoundary";

import { AppPropsWithLayout } from "./index/type";
import { PROTECTED_ROUTE_ARR } from "./index/constant";

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

function BusinessService({ Component, pageProps }: AppPropsWithLayout) {
  ReactGA.initialize(KEY);

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
    const prevUrl = sessionStorage.getItem("currentUrl");
    sessionStorage.setItem("prevUrl", prevUrl || "none");
    sessionStorage.setItem("currentUrl", router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const firstEntryTime = new Date().getTime();
    sessionStorage.setItem("firstEntryTime", JSON.stringify(firstEntryTime));
  }, []);

  useAxiosInterceptor();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        <ErrorBoundary>
          <PrivateRouteLayout protectedRoutes={PROTECTED_ROUTE_ARR}>
            {getLayout(<Component {...pageProps} />)}
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
