import { useEffect } from "react";

import { ModalProps } from "./type";
import { cssObj } from "./style";

const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <div css={cssObj.layout}>{children}</div>;
};

export default Modal;
