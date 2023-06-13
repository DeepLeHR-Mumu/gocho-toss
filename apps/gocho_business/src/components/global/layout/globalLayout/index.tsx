import { FunctionComponent } from "react";

import { TopBar } from "../../topBar";

import { GlobalLayoutProps } from "./type";

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);
