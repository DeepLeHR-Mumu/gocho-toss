import React, { FunctionComponent, ReactNode } from "react";
import { layout } from "./style";

interface LayoutDef {
  children: ReactNode;
}
export const Layout: FunctionComponent<LayoutDef> = ({
  children,
}) => {
  return <div css={layout}>{children}</div>;
};
