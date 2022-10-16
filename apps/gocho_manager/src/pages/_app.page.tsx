import { useState } from "react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Header, SideBar } from "@component/global";
import { Layout } from "@component/layout";
import { globalStyles } from "@style/globalStyles";
import { flexBox } from "./style";

function MyApp({ Component, pageProps }: AppProps) {
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
          <Header />
          <Global styles={globalStyles} />
          <Layout>
            <div css={flexBox}>
              <SideBar />
              <Component {...pageProps} />
            </div>
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
