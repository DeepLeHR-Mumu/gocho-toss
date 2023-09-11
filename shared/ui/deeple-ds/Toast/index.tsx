import { createPortal } from "react-dom";

import { ToastProps } from "./type";
import { cssObj } from "./style";

export const Toast = ({ children }: ToastProps) =>
  createPortal(
    <div css={cssObj.wrapper} aria-hidden>
      {children}
    </div>,
    document.getElementById("toastPortal") as HTMLElement
  );
