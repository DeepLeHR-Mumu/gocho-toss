import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

import { dimmed } from "./style";
import { modalComponentProps } from "./type";

export const ModalComponent: FunctionComponent<modalComponentProps> = ({ children }) => {
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

  return createPortal(<div css={dimmed}>{children}</div>, document.getElementById("portal") as HTMLElement);
};
