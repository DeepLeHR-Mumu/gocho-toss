import { FunctionComponent, ReactNode } from "react";
import { container } from "./style";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => <div css={container}>{children}</div>;
