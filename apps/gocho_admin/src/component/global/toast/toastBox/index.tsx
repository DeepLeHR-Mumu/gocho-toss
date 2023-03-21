import { createPortal } from "react-dom";
import { FunctionComponent } from "react";

import { wrapper, descCSS } from "./style";

interface ToastBoxProps {
  activatedMsg?: string;
}

export const ToastBox: FunctionComponent<ToastBoxProps> = ({ activatedMsg }) =>
  createPortal(
    <div css={wrapper} aria-hidden>
      <p css={descCSS}>{activatedMsg}</p>
    </div>,
    document.getElementById("toastPortal") as HTMLElement
  );
