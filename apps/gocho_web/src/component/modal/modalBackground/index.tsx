import { FunctionComponent, MouseEvent, useCallback, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { MAIN_URL } from "shared-constant/internalURL";
import { dimmed, homeLinkBackground } from "./style";
import { modalComponentProps } from "./type";

export const ModalComponent: FunctionComponent<modalComponentProps> = ({ button, children, closeModal }) => {
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

  if (button === "home") {
    return createPortal(
      <div css={dimmed}>
        {children}
        <Link href={MAIN_URL} passHref>
          <a css={homeLinkBackground}>메인페이지 이동</a>
        </Link>
      </div>,
      document.getElementById("portal") as HTMLElement
    );
  }

  return createPortal(
    <button aria-label="팝업 닫기" type="button" css={dimmed} onClick={closeOnClick}>
      {children}
    </button>,
    document.getElementById("portal") as HTMLElement
  );
};
