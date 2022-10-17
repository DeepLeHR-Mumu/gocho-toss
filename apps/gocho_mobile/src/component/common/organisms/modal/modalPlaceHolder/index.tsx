import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { WriteKakaoInfoModal } from "../writeKakaoInfoModal";
import { FindPasswordModal } from "../findPasswordModal";

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

  if (currentModal?.activatedModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }
  return null;
};
