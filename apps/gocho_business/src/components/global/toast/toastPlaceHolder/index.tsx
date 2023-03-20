import { FunctionComponent } from "react";

import { useToast } from "@/globalStates";

import { ToastBox } from "../toastBox";

export const ToastPlaceholder: FunctionComponent = () => {
  const { currentToast } = useToast();

  if (currentToast) {
    return <ToastBox activatedMsg={currentToast} />;
  }
  return null;
};
