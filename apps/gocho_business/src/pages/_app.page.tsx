import type { AppProps } from "next/app";
import { useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

import { useAxiosInterceptor } from "@/api/useAxiosInterceptor";
import { useUserStatus } from "@/globalStates/useUser";
import { globalStyle, pageContainer, sidebarContainer } from "@/styles/globalStyle";
import { SideBar } from "@/components/global/sideBar";
import { TopBar } from "@/components/global/topBar";
import { ToastPlaceholder } from "@/components/global/toast/toastPlaceHolder";

function BusinessService({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isLogined } = useUserStatus();
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

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        <div css={sidebarContainer}>
          {isLogined && <SideBar />}
          <div css={pageContainer(isLogined)}>
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
