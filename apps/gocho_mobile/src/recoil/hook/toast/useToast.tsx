import { useRecoilState } from "recoil";

import { toastAtom } from "@recoil/atom";

import { ToastMsgDef, ToastAuthMsgDef } from "@recoil/atom/toast";

export interface SetCurrentToastDef {
  (msg: ToastMsgDef, userNickname?: never): void;
  (msg: ToastAuthMsgDef, userNickname: string): void;
}

export const useToast = () => {
  const [_currentToast, _setCurrentToast] = useRecoilState(toastAtom);

  const closeToast = () => {
    return _setCurrentToast(null);
  };

  const currentToast = _currentToast;

  const setCurrentToast: SetCurrentToastDef = (msg, userNickname) => {
    if (userNickname) {
      return _setCurrentToast({
        activatedMsg: msg,
        nickname: userNickname,
      });
    }
    return _setCurrentToast({
      activatedMsg: msg,
    });
  };

  return { setCurrentToast, currentToast, closeToast };
};
