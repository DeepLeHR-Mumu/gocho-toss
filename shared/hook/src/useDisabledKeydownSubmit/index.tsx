import { useEffect } from "react";

export const useDisabledKeydownSubmit = () => {
  useEffect(() => {
    document.addEventListener("keydown", (keyDownEvent: KeyboardEvent) => {
      const target = keyDownEvent.target as HTMLInputElement | HTMLTextAreaElement;

      if (keyDownEvent.key === "Enter" && !["TEXTAREA"].includes(target.tagName)) {
        keyDownEvent.preventDefault();
      }
    });

    return () => {
      document.removeEventListener("keydown", (keyDownEvent) => {
        const target = keyDownEvent.target as HTMLInputElement | HTMLTextAreaElement;
        if (keyDownEvent.key === "Enter" && !["TEXTAREA"].includes(target.tagName)) {
          keyDownEvent.preventDefault();
        }
      });
    };
  }, []);
};
