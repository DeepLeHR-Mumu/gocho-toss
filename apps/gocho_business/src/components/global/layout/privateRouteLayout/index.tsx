import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

import { useHealthCheck } from "@/apis";
import { PROTECTED_ROUTE_ARR } from "@/pages/constant";
import { INTERNAL_URL } from "@/constants";

import { GlobalLayout } from "../globalLayout";

import { PrivateRouteProps } from "./type";
import { cssObj } from "./style";

export const PrivateRouteLayout: FunctionComponent<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const { isSuccess, isLoading } = useHealthCheck();
  const isPathProtected = PROTECTED_ROUTE_ARR.findIndex((route) => route === router.pathname) !== -1;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!isSuccess && isPathProtected && token) {
      return;
    }
    if (!isSuccess && isPathProtected && !token) {
      router.push(INTERNAL_URL.LOGIN);
    }
  }, [isPathProtected, isSuccess, router]);

  if ((isLoading || !isSuccess) && isPathProtected) {
    return <div css={cssObj.loadingBox} />;
  }

  return isPathProtected ? (
    <GlobalLayout>{children}</GlobalLayout>
  ) : (
    // eslint-disable-next-line
    <>{children}</>
  );
};
