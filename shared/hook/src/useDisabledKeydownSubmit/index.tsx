import { useEffect } from "react";

export const useDisabledKeydownSubmit = () => {
  useEffect(() => {
    const handleKeyDown = (keyDownEvent: KeyboardEvent) => {
      const target = keyDownEvent.target as HTMLInputElement | HTMLTextAreaElement;

      if (keyDownEvent.key === "Enter" && !["TEXTAREA"].includes(target.tagName)) {
        keyDownEvent.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
