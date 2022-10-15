import { FunctionComponent } from "react";

import { useToast } from "@recoil/hook/toast";

import { ToastComponent } from "../toastComponent";

export const ToastPlaceholder: FunctionComponent = () => {
  const { currentToast } = useToast();

  if (currentToast) {
    return <ToastComponent nickName={currentToast.nickname} activatedMsg={currentToast.activatedMsg} />;
  }
  return null;
};
