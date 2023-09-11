import { useEffect } from "react";
import { create } from "zustand";
import { SetToastMessageDef, ToastAtomProps } from "./type";

const toastZustand = create<ToastAtomProps>((set) => {
  return {
    toastMessage: null,
    nickname: undefined,
    setToastMessage: (toastMessage, nickname = undefined) => {
      set(() => {
        return { toastMessage, nickname };
      });
    },
  };
});

export const useToast = () => {
  const { toastMessage: _toastMessage, setToastMessage: _setToastMessage, nickname: _nickname } = toastZustand();

  useEffect(() => {
    if (_toastMessage === null) {
      return;
    }
    setTimeout(() => {
      _setToastMessage(null);
    }, 3500);
  }, [_toastMessage, _setToastMessage]);

  const closeToast = () => {
    return _setToastMessage(null);
  };

  const setToastMessage: SetToastMessageDef = (toastMessage, nickname) => {
    if (toastMessage === null) {
      return null;
    }

    return _setToastMessage(toastMessage, nickname);
  };
  const toastMessage = _toastMessage;
  const nickname = _nickname;

  return { setToastMessage, toastMessage, nickname, closeToast };
};
