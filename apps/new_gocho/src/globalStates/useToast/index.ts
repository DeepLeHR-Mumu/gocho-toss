import { create } from "zustand";

import { ToastStateProps } from "./type";
import { TOAST_STACK_MAX_SIZE, TOAST_FADE_OUT_SECOND } from "./constant";

export const useToast = create<ToastStateProps>((set) => ({
  toastStack: [],
  setToastMessage: (message) => {
    set(({ toastStack: prevToastStack }) => {
      const toastId = window.setTimeout(() => {
        set(({ toastStack: targetToastStack }) => ({
          toastStack: targetToastStack.filter((toast) => toast.id !== toastId),
        }));
      }, 1000 * TOAST_FADE_OUT_SECOND);

      return { toastStack: prevToastStack.concat({ id: toastId, message }).slice(-1 * TOAST_STACK_MAX_SIZE) };
    });
  },
}));
