import { FunctionComponent } from "react";

import { SideBar } from "../sideBar";
import { TopBar } from "../topBar";
import { cssObj } from "./style";
import { GlobalLayoutProps } from "./type";

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <div css={cssObj.sidebarContainer}>
    <SideBar />
    <div css={cssObj.pageContainer}>
      <TopBar />
      {children}
    </div>
  </div>
);
