import { FunctionComponent } from "react";

import { useModal } from "@recoil/hook/modal";

import { SignUpModal } from "../signUpModal";
import { LoginModal } from "../loginModal";
import { PageBlockingModal } from "../pageBlockingModal";
import { AccountSettingModal } from "../accountSettingModal";
import { PostingModal } from "../postingModal";
import { WritePostingModal } from "../writePostingModal";
import { ChangePostingModal } from "../changePostingModal";
import { TipModal } from "../tipModal";
import { FactoryModal } from "../factoryModal";

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
  if (currentModal?.activatedModal === "postingModal") {
    return <PostingModal />;
  }
  if (currentModal?.activatedModal === "writePostingModal") {
    return <WritePostingModal />;
  }
  if (currentModal?.activatedModal === "changePostingModal") {
    return <ChangePostingModal />;
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

  return null;
};
