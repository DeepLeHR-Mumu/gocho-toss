import { createPortal } from "react-dom";
import { FunctionComponent } from "react";

import { wrapper, descCSS } from "./style";

interface ToastComponentProps {
  nickName?: string;
  activatedMsg?: string;
}

export const ToastComponent: FunctionComponent<ToastComponentProps> = ({ nickName, activatedMsg }) => {
  return createPortal(
    <div css={wrapper} aria-hidden>
      <p css={descCSS}>
        {nickName}
        {activatedMsg}
      </p>
    </div>,
    document.getElementById("toast") as HTMLElement
  );
};
