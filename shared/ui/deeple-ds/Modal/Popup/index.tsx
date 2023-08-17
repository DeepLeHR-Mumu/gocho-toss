import { FiX } from "react-icons/fi";

import Divider from "../../Divider";
import Button from "../../Button";
import Modal from "..";

import { PopupProps } from "./type";
import { cssObj } from "./style";

const Popup = ({ title, description, closeHandler, cancel, confirm }: PopupProps) => (
  <Modal>
    <div css={cssObj.wrapper}>
      <div css={cssObj.header}>
        <h3 css={cssObj.title}>{title}</h3>
        {closeHandler && <FiX css={cssObj.close} onClick={closeHandler} />}
      </div>
      <Divider css={cssObj.divider} />
      {typeof description === "string" && <p css={cssObj.description}>{description}</p>}
      {/** TODO 이후 공통 모듈에 배열인지 확인하는 타입가드 함수 추가해서 이 아래 라인에 적용 */}
      {typeof description === "object" &&
        "map" in description &&
        description.map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index} css={cssObj.description}>
            {line}
          </p>
        ))}
      {(cancel || confirm) && (
        <div css={cssObj.buttonGroup}>
          {cancel && (
            <Button size="140" color="grayLine" onClick={cancel.handler}>
              {cancel.text}
            </Button>
          )}
          {confirm && (
            <Button size="140" onClick={confirm.handler}>
              {confirm.text}
            </Button>
          )}
        </div>
      )}
    </div>
  </Modal>
);

export default Popup;
