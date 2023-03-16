import { useState } from "react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Header, SideBar } from "@component/global";
import { globalStyle } from "@style/globalStyle";

import { flexBox } from "./style";

function AdminService({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 15000,
          refetchOnWindowFocus: false,
          keepPreviousData: true,
          retry: 0,
        },
      },
    });
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Global styles={globalStyle} />
          <Header />
          <div css={flexBox}>
            <SideBar />
            <Component {...pageProps} />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default AdminService;
