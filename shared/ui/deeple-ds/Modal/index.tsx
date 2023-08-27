import { useEffect } from "react";

import { ModalProps } from "./type";
import { cssObj } from "./style";

export const Modal = ({ children, ...props }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div css={cssObj.layout} {...props}>
      {children}
    </div>
  );
};