import { useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "./type";
import { cssObj } from "./style";

const Modal = ({ portalId = "portal", children, ...props }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div css={cssObj.layout} {...props}>
      {children}
    </div>,
    document.getElementById(portalId) as HTMLElement
  );
};

export default Modal;
