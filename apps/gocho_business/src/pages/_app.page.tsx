import type { AppProps } from "next/app";
import { useState } from "react";
import { Global } from "@emotion/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

import { globalStyle, pageContainer, sidebarContainer } from "@/styles/globalStyle";
import { SideBar } from "@/component/global/sideBar";
import { TopBar } from "@/component/global/topBar";

function BusinessService({ Component, pageProps }: AppProps) {
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
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default BusinessService;
