import { FunctionComponent, useRef } from "react";
import { FiX } from "react-icons/fi";

import { useFocusTrap } from "shared-hooks";

import { useModal } from "@/globalStates";

import { ModalComponent } from "../modalBackground";

import { USAGE_TERM } from "./constant";
import { cssObj } from "./style";

export const UsageTermBox: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModal();

  useFocusTrap(modalRef);

  return (
    <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
      <div css={cssObj.titleWrapper}>
        <h3 css={cssObj.title}>이용 약관</h3>
        <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
          <FiX />
        </button>
      </div>
      <p css={cssObj.content}>{USAGE_TERM}</p>
    </div>
  );
};

export const UsageTermModal: FunctionComponent = () => (
  <ModalComponent>
    <UsageTermBox />
  </ModalComponent>
);
