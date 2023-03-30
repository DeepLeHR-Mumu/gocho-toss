import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { FindPasswordModal } from "../findPasswordModal";
import { NoticeModal } from "../noticeModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { modal } = useModal();

  if (modal === "loginModal") {
    return <LoginModal />;
  }

  if (modal === "signUpModal") {
    return <SignUpModal />;
  }

  if (modal === "findPasswordModal") {
    return <FindPasswordModal />;
  }

  if (modal === "noticeModal") {
    return <NoticeModal />;
  }
  return null;
};
