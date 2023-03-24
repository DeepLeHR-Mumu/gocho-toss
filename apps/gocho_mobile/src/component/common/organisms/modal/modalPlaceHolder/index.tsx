import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { FindPasswordModal } from "../findPasswordModal";
import { NoticeModal } from "../noticeModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { currentModal } = useModal();

  if (currentModal?.activatedModal === "loginModal") {
    return <LoginModal />;
  }

  if (currentModal?.activatedModal === "signUpModal") {
    return <SignUpModal />;
  }

  if (currentModal?.activatedModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }

  if (currentModal?.activatedModal === "noticeModal") {
    return <NoticeModal />;
  }
  return null;
};
