import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";
import { FindPasswordModal } from "../findPasswordModal";
import { LoginModal } from "../loginModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }
  if (currentModal === "loginModal") {
    return <LoginModal />;
  }

  return null;
};
