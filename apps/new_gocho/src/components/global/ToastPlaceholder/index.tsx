import { Toast } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates/useToast";

export const ToastPlaceholder = () => {
  const { toastStack } = useToast();

  return (
    <>
      {toastStack.map((toast) => (
        <Toast key={toast.id}>{toast.message}</Toast>
      ))}
    </>
  );
};
