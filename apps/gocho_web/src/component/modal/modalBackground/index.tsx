import { FunctionComponent, MouseEvent, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { dimmed } from "./style";
import { modalComponentProps } from "./type";

export const ModalComponent: FunctionComponent<modalComponentProps> = ({ children, closeModal }) => {
  const closeOnClick = useCallback(
    (event: MouseEvent): void => {
      if (event?.target === event?.currentTarget) {
        closeModal?.();
      }
    },
    [closeModal]
  );

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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return createPortal(
    <div aria-hidden css={dimmed} onClick={closeOnClick}>
      {children}
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};
