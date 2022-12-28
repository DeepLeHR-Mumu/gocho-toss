import { ReactNode } from "react";

export interface PrivateRouteProps {
  protectedRoutes: string[];
  children: ReactNode;
}
