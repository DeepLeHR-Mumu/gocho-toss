import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

import { dimmed } from "./style";
import { modalComponentProps } from "./type";

export const ModalComponent: FunctionComponent<modalComponentProps> = ({ children }) => {
  useEffect(() => {
    // TODO: body css로 옮기기
    document.body.style.cssText = `
      position: fixed; 
      top: 0;
      left:0;
      min-width:1440px;
      overflow-x:hidden;
      overflow-y: hidden;
      `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return createPortal(<div css={dimmed}>{children}</div>, document.getElementById("modalPortal") as HTMLElement);
};
