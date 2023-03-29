import { FunctionComponent } from "react";

import { Header } from "../header";
import { SideBar } from "../sideBar";
import { GlobalLayoutProps } from "./type";
import { cssObj } from "./style";

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <>
    <Header />
    <div css={cssObj.container}>
      <SideBar />
      <div css={cssObj.content}>{children}</div>
    </div>
  </>
);
