import { FunctionComponent } from "react";

import { Toast } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";

export const ToastPlaceholder: FunctionComponent = () => {
  const { toastMessage } = useToast();

  if (toastMessage) {
    return <Toast>{toastMessage}</Toast>;
  }
  return null;
};
