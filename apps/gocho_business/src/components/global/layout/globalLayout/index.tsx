import { FunctionComponent } from "react";

import { GlobalNav } from "../../globalNav";

import { GlobalLayoutProps } from "./type";

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <>
    <GlobalNav />
    {children}
  </>
);
