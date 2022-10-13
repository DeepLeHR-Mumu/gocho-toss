import { FunctionComponent } from "react";

import { LayoutDef } from "./type";
import { popupBackground, bottomPopup, wrapper } from "./style";

export const BottomPopup: FunctionComponent<LayoutDef> = ({ children }) => {
  return (
    <div css={wrapper}>
      <div css={popupBackground} />
      <div css={bottomPopup}>{children}</div>
    </div>
  );
};
