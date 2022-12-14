import { createPortal } from "react-dom";
import { FunctionComponent } from "react";

import { wrapper, descCSS } from "./style";

interface ToastBoxProps {
  nickName?: string;
  activatedMsg?: string;
}

export const ToastBox: FunctionComponent<ToastBoxProps> = ({ nickName, activatedMsg }) => {
  return createPortal(
    <div css={wrapper} aria-hidden>
      <p css={descCSS}>
        {nickName}
        {activatedMsg}
      </p>
    </div>,
    document.getElementById("toastPortal") as HTMLElement
  );
};
