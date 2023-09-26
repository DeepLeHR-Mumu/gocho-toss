import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "./type";
import { cssObj } from "./style";

export const Modal = ({ portalId = "portal", children, ...props }: ModalProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return createPortal(
    <div css={cssObj.layout} {...props}>
      {children}
    </div>,
    document.getElementById(portalId) as HTMLElement
  );
};
