import { FunctionComponent } from "react";
import { useModal } from "@recoil/hook/modal";

import { dialogModalDef } from "@recoil/atom/modal";
import { ModalComponent } from "@component/modal/modalBackground";

import { DialogModalBoxProps } from "./type";
import { title, wrapper, descCSS, flexBox, noButton, yesButton } from "./style";

const DialogModalBox: FunctionComponent<DialogModalBoxProps> = ({ dataObj }) => {
  const { closeModal } = useModal();

  const doActive = () => {
    closeModal();
    dataObj.doActive();
  };

  const doNotActive = () => {
    closeModal();
  };

  return (
    <div css={wrapper}>
      <strong css={title}>{dataObj.title}</strong>
      <p css={descCSS}>{dataObj.desc}</p>
      <div css={flexBox}>
        <button type="button" css={noButton} onClick={doNotActive}>
          아니오
        </button>
        <button type="button" css={yesButton} onClick={doActive}>
          {dataObj.agreeDesc}
        </button>
      </div>
    </div>
  );
};

export const DialogModal: FunctionComponent = () => {
  const { currentModal } = useModal();

  return (
    <ModalComponent>
      <DialogModalBox dataObj={currentModal?.modalContentObj as dialogModalDef} />
    </ModalComponent>
  );
};
