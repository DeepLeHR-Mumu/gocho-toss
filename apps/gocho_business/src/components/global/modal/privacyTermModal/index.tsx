import { FunctionComponent, useRef } from "react";
import { FiX } from "react-icons/fi";

import { useFocusTrap } from "shared-hook";

import { useModal } from "@/globalStates";

import { ModalComponent } from "../modalBackground";
import { PRIVACY_TERM } from "./constant";
import { cssObj } from "./style";

export const PrivacyTermModal: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModal();

  useFocusTrap(modalRef);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>개인정보 수집 및 이용동의</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <div css={cssObj.contentWrapper}>
          {PRIVACY_TERM.split("\n").map((str) => (
            <>
              <p key={str} css={cssObj.text}>
                {str}
              </p>
              {str === "" && <br />}
            </>
          ))}
        </div>
      </div>
    </ModalComponent>
  );
};
