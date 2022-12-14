import { useEffect } from "react";
import create from "zustand";
import { ToastStringType, ToastZustandlProps } from "./type";

const toastZustand = create<ToastZustandlProps>((set) => {
  return {
    currentToast: null,
    setToast: (status) => {
      return set(() => {
        return { currentToast: status };
      });
    },
  };
});

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

  const closeToast = () => {
    return _setToast(null);
  };

  const setToast = (toastString: ToastStringType) => {
    _setToast(toastString);
  };

  return { closeToast, setToast, currentToast };
};
