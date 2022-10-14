import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { WriteKakaoInfoModal } from "../writeKakaoInfoModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal?.activatedModal === "loginModal") {
    return <LoginModal />;
  }

  if (currentModal?.activatedModal === "signUpModal") {
    return <SignUpModal />;
  }

  if (currentModal?.activatedModal === "writeKakaoInfoModal") {
    return <WriteKakaoInfoModal />;
  }

  return null;
};
