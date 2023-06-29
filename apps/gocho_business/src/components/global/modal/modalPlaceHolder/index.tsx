import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";
import { FindPasswordModal } from "../findPasswordModal";
import { LoginModal } from "../loginModal";
import { FactoryAddModal } from "../factoryAddModal";
import { FactoryEditModal } from "../factoryEditModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { modal } = useModal();

  if (modal === "findPasswordModal") {
    return <FindPasswordModal />;
  }

  if (modal === "loginModal") {
    return <LoginModal />;
  }

  if (modal === "factoryAddModal") {
    return <FactoryAddModal />;
  }

  if (modal === "factoryEditModal") {
    return <FactoryEditModal />;
  }

  return null;
};
