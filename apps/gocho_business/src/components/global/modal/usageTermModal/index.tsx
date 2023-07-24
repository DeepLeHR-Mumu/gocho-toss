import { FunctionComponent, useRef } from "react";
import { FiX } from "react-icons/fi";

import { useFocusTrap } from "shared-hooks";

import { useModal } from "@/globalStates";

import { ModalComponent } from "../modalBackground";

import { USAGE_TERM } from "./constant";
import { cssObj } from "./style";

export const UsageTermModal: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModal();

  useFocusTrap(modalRef);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>이용 약관</h3>
          <button type="button" css={cssObj.closeButton} onClick={() => closeModal()}>
            <FiX />
          </button>
        </div>
        <div css={cssObj.contentWrapper}>
          {USAGE_TERM.split("\n").map((str) => (
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
