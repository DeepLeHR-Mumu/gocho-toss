// NOTE deeple-ds 에 넣고 이 컴포넌트로 Popup 컴포넌트를 만들까 고려해보면 좋을 듯.
import { FiX } from "react-icons/fi";

import { Modal, Divider } from "shared-ui/deeple-ds";

import { ModalWithTitleProps } from "./type";
import { cssObj } from "./style";

export const ModalWithTitle = ({ title, width = 46, children, closeHandler }: ModalWithTitleProps) => (
    <Modal>
      <div css={cssObj.wrapper(width)}>
        <div css={cssObj.header}>
          <h3 css={cssObj.title}>{title}</h3>
          {closeHandler && (
            <button type="button" onClick={closeHandler}>
              <FiX css={cssObj.close} />
            </button>
          )}
        </div>
        <Divider css={cssObj.divider} />
        {children}
      </div>
    </Modal>
  );
