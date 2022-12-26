import { FunctionComponent, ReactNode } from "react";
import { container } from "./style";

export interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => <div css={container}>{children}</div>;
