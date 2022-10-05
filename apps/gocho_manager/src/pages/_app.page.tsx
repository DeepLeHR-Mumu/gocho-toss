import { useState } from "react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { globalStyles } from "@style/globalStyles";

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
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
