import { createPortal } from "react-dom";
import { FunctionComponent, useEffect } from "react";

import { useToast } from "@recoil/hook/toast";

import { wrapper, descCSS } from "./style";

export const ToastComponent: FunctionComponent = () => {
  const { closeToast, currentToast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, 3500);
  }, []);

  return createPortal(
    <div css={wrapper} aria-hidden onClick={closeToast}>
      <p css={descCSS}>
        {currentToast?.nickname}
        {currentToast?.activatedMsg}
      </p>
    </div>,
    document.getElementById("toast") as HTMLElement
  );
};
