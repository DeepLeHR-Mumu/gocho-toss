import React, { FunctionComponent, ReactNode } from "react";
import { layout } from "./style";

interface PageLayoutDef {
  children: ReactNode;
}
export const PageLayout: FunctionComponent<PageLayoutDef> = ({ children }) => <div css={layout}>{children}</div>;
