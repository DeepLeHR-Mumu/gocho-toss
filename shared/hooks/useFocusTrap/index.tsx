import { RefObject, useEffect } from "react";

export const useFocusTrap = (modalRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleTab = (keyBoardEvent: KeyboardEvent) => {
      if (modalRef.current === null) return;
      const focusableElements: NodeListOf<HTMLElement> = modalRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (keyBoardEvent.key === "Tab" && keyBoardEvent.shiftKey && document.activeElement === firstFocusableElement) {
        keyBoardEvent.preventDefault();
        lastFocusableElement.focus();
        return;
      }
      if (keyBoardEvent.key === "Tab" && !keyBoardEvent.shiftKey && document.activeElement === lastFocusableElement) {
        keyBoardEvent.preventDefault();
        firstFocusableElement.focus();
      }
    };

    modalRef?.current?.focus();
    const element = document.getElementById("__next");
    if (element) {
      element.ariaHidden = "true";
    }
    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
      if (element) {
        element.ariaHidden = "false";
      }
    };
  }, [modalRef]);
};
