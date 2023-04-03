import { useEffect } from "react";
import { create } from "zustand";
import { ToastStringType, ToastZustandlProps } from "./type";

const toastZustand = create<ToastZustandlProps>((set) => ({
  currentToast: null,
  setToast: (status) => set(() => ({ currentToast: status })),
}));

export const useToast = () => {
  const { currentToast, setToast: _setToast } = toastZustand();

  useEffect(() => {
    if (currentToast === null) {
      return;
    }
    setTimeout(() => {
      _setToast(null);
    }, 3500);
  }, [currentToast, _setToast]);

  const closeToast = () => _setToast(null);

  const setToast = (toastString: ToastStringType) => {
    _setToast(toastString);
  };

  return { closeToast, setToast, currentToast };
};
