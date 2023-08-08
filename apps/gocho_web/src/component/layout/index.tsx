import React, { FunctionComponent, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/react";

import { layout } from "./style";

interface LayoutDef {
  additionalCss?: SerializedStyles;
  children: ReactNode;
}
export const Layout: FunctionComponent<LayoutDef> = ({ additionalCss, children }) => {
  return (
    <div
      css={css`
        ${layout}${additionalCss}
      `}
    >
      {children}
    </div>
  );
};
