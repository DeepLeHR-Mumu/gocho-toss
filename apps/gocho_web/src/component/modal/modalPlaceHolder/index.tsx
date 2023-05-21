import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { PageBlockingModal } from "../pageBlockingModal";
import { AccountSettingModal } from "../accountSettingModal";
import { FactoryModal } from "../factoryModal";
import { DialogModal } from "../dialogModal";
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
  if (modal === "accountSettingModal") {
    return <AccountSettingModal />;
  }
  if (modal === "pageBlockModal") {
    return <PageBlockingModal />;
  }
  if (modal === "factoryModal") {
    return <FactoryModal />;
  }
  if (modal === "findPasswordModal") {
    return <FindPasswordModal />;
  }
  if (modal === "dialogModal") {
    return <DialogModal />;
  }
  if (modal === "noticeModal") {
    return <NoticeModal />;
  }

  return null;
};
