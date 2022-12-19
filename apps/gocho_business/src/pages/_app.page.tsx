import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

import { useAxiosInterceptor } from "@/api/useAxiosInterceptor";
// import { INTERNAL_URL } from "@/constants";
import { globalStyle, pageContainer, sidebarContainer } from "@/styles/globalStyle";
import { SideBar } from "@/components/global/sideBar";
import { TopBar } from "@/components/global/topBar";
import { ToastPlaceholder } from "@/components/global/toast/toastPlaceHolder";
import { INTERNAL_URL } from "@/constants";

function BusinessService({ Component, pageProps }: AppProps) {
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

  useAxiosInterceptor();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const currentUrl = router.pathname;
    if (!token && currentUrl !== INTERNAL_URL.LOGIN) router.push(INTERNAL_URL.LOGIN);
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        <div css={sidebarContainer}>
          <SideBar />
          <div css={pageContainer}>
            <TopBar />
            <Component {...pageProps} />
          </div>
        </div>
        <ToastPlaceholder />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default BusinessService;
