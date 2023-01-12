import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

import { useHealthCheck } from "@/apis/auth/useHealthCheck";
import { INTERNAL_URL } from "@/constants/url";
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

  if ((isLoading || !isSuccess) && isPathProtected) {
    return <div css={cssObj.loadingBox} />;
  }

  return <div>{children}</div>;
};
