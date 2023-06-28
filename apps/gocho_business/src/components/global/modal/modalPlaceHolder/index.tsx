import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";
import { FindPasswordModal } from "../findPasswordModal";
import { LoginModal } from "../loginModal";
import { FactoryModal } from "../factoryModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }

  if (currentModal === "loginModal") {
    return <LoginModal />;
  }

  if (currentModal === "factoryModal") {
    return <FactoryModal />;
  }

  return null;
};
