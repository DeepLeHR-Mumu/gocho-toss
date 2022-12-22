import { FunctionComponent, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import { useHealthCheck } from "@/api/auth/useHealthCheck";
import { INTERNAL_URL } from "@/constants";
import { tokenService } from "@/util/tokenService";

interface PrivateRouteProps {
  protectedRoutes: string[];
  children: ReactNode;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ protectedRoutes, children }) => {
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
    // LATER : 추후 스피넛? 완성되면 집어넣기
    return <div style={{ backgroundColor: "red", width: "100vw", height: "100vh" }}>loading...</div>;
  }

  return <div>{children}</div>;
};
