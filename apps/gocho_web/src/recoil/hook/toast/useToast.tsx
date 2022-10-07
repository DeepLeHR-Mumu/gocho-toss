import { useRecoilState } from "recoil";

import { toastAtom } from "@recoil/atom";

import { ToastMsgDef, ToastAuthMsgDef } from "@recoil/atom/toast";
import { useEffect } from "react";

export interface SetCurrentToastDef {
  (msg: ToastMsgDef, userNickname?: never): void;
  (msg: ToastAuthMsgDef, userNickname: string): void;
}

export const useToast = () => {
  const [_currentToast, _setCurrentToast] = useRecoilState(toastAtom);

  useEffect(() => {
    if (_currentToast === null) {
      return;
    }
    setTimeout(() => {
      _setCurrentToast(null);
    }, 3500);
  }, [_currentToast, _setCurrentToast]);

  const closeToast = () => {
    return _setCurrentToast(null);
  };

  const currentToast = _currentToast;

  const setCurrentToast: SetCurrentToastDef = (msg, userNickname) => {
    if (currentToast !== null) {
      return null;
    }
    return _setCurrentToast({
      activatedMsg: msg,
      nickname: userNickname,
    });
  };

  return { setCurrentToast, currentToast, closeToast };
};
