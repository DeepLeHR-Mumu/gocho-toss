import React, { FunctionComponent, ReactNode } from "react";
import { popupBackground, bottomPopup } from "./style";

interface LayoutDef {
  children: ReactNode;
}

export const BottomPopup: FunctionComponent<LayoutDef> = ({ children }) => {
  return (
    <div>
      <div css={popupBackground} />
      <div css={bottomPopup}>{children}</div>
    </div>
  );
};
