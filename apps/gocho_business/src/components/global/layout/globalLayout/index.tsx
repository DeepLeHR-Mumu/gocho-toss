import { FunctionComponent, ReactNode } from "react";

import { SideBar } from "../sideBar";
import { TopBar } from "../topBar";
import { cssObj } from "./style";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <div css={cssObj.sidebarContainer}>
    <SideBar />
    <div css={cssObj.pageContainer}>
      <TopBar />
      {children}
    </div>
  </div>
);
