import { FunctionComponent } from "react";

import { useToast } from "@/globalStates";

import { ToastComponent } from "../toastComponent";

export const ToastPlaceholder: FunctionComponent = () => {
  const { toastMessage, nickname } = useToast();

  if (toastMessage) {
    return <ToastComponent nickName={nickname} activatedMsg={toastMessage} />;
  }
  return null;
};
