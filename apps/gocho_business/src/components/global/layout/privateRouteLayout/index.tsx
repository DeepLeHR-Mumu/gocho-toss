import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

import { useHealthCheck } from "@/apis/auth/useHealthCheck";
import { INTERNAL_URL } from "@/constants";
import { tokenService } from "@/utils/tokenService";

import { PrivateRouteProps } from "./type";
import { cssObj } from "./style";

export const PrivateRouteLayout: FunctionComponent<PrivateRouteProps> = ({ protectedRoutes, children }) => {
  const router = useRouter();
  const { isSuccess, isLoading } = useHealthCheck();
  const isPathProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    const token = tokenService.getAccessToken();
    if (!isLoading && !isSuccess && isPathProtected && !token) {
      router.push(INTERNAL_URL.LOGIN);
    }
  }, [isLoading, isPathProtected, isSuccess, router]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === INTERNAL_URL.LOGIN && !isLoading && isSuccess) {
        router.events.emit("routeChangeError");
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isLoading, isSuccess, router]);

  if ((isLoading || !isSuccess) && isPathProtected) {
    return <div css={cssObj.loadingBox} />;
  }

  return <div>{children}</div>;
};
