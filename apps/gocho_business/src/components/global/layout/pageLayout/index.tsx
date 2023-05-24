import { FunctionComponent, ReactNode } from "react";
import { cssObj } from "./style";

export interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => (
  <main css={cssObj.mainWrapper}>
    <div css={cssObj.mainContainer}>{children}</div>
  </main>
);
