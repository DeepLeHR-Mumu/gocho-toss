import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { PageBlockingModal } from "../pageBlockingModal";
import { AccountSettingModal } from "../accountSettingModal";
import { TipModal } from "../tipModal";
import { FactoryModal } from "../factoryModal";
import { WriteKakaoInfoModal } from "../writeKakaoInfoModal";
import { DialogModal } from "../dialogModal";
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
  if (currentModal?.activatedModal === "accountSettingModal") {
    return <AccountSettingModal />;
  }
  if (currentModal?.activatedModal === "tipModal") {
    return <TipModal />;
  }
  if (currentModal?.activatedModal === "pageBlockModal") {
    return <PageBlockingModal />;
  }
  if (currentModal?.activatedModal === "factoryModal") {
    return <FactoryModal />;
  }
  if (currentModal?.activatedModal === "writeKakaoInfoModal") {
    return <WriteKakaoInfoModal />;
  }
  if (currentModal?.activatedModal === "findPasswordModal") {
    return <FindPasswordModal />;
  }
  if (currentModal?.activatedModal === "dialogModal") {
    return <DialogModal />;
  }
  if (currentModal?.activatedModal === "noticeModal") {
    return <NoticeModal />;
  }

  return null;
};
