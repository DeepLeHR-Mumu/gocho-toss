import { FunctionComponent } from "react";

import { useModal } from "@/globalStates/useModal";
import { FindPasswordModal } from "../findPasswordModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }

  return null;
};
