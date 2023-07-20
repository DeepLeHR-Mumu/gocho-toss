import { FunctionComponent, useRef } from "react";
import { FiX } from "react-icons/fi";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { useFocusTrap } from "shared-hooks";

import { useModal, certiArrDef } from "@/globalStates";
// import { commonCssObj } from "@/styles";

import { ModalComponent } from "../modalBackground";

import { cssObj } from "./style";

export const CertiAddModal: FunctionComponent = () => {
  const { contentObj, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const certi = contentObj as certiArrDef;

  useFocusTrap(modalRef);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>자격증 추가</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        {certi.certiArr.map((certiName) => (
          <p key={`JdUploadCertiAdd${certiName}`}>{certiName}</p>
        ))}
        <div>
          <div css={cssObj.buttonContainer}>
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="outLineGray" text="취소" width={8.75} />
            <NewSharedButton onClickHandler={() => closeModal()} buttonType="fillBlue" text="확인" width={8.75} />
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};
