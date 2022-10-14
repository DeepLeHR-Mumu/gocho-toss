import { FunctionComponent, useEffect } from "react";

import { LayoutDef } from "./type";
import { popupBackground, bottomPopup, wrapper } from "./style";

export const BottomPopup: FunctionComponent<LayoutDef> = ({ children }) => {
  useEffect(() => {
    // TODO: body css로 옮기기
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div css={wrapper}>
      <div css={popupBackground} />
      <div css={bottomPopup}>{children}</div>
    </div>
  );
};
