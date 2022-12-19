import { FunctionComponent } from "react";

import { useModal } from "@/globalStates/useModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal === "loginModal") {
    return <h1>loginModal</h1>;
  }
  return null;
};
