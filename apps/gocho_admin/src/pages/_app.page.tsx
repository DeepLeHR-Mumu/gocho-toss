import { useState } from "react";
import { Global } from "@emotion/react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ToastPlaceholder } from "@/component";
import { globalStyle } from "@/style/globalStyle";

import { AppPropsWithLayout } from "../types/nextPageWithLayoutType";

function AdminService({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 15000,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            retry: 0,
          },
        },
      })
  );

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={globalStyle} />
        {getLayout(<Component {...pageProps} />)}
        <ToastPlaceholder />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default AdminService;
