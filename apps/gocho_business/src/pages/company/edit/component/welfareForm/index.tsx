import { FunctionComponent } from "react";
import { FiCornerDownLeft, FiMinus } from "react-icons/fi";

import { cssObj } from "./style";

export const WelfareForm: FunctionComponent = () => (
  <div css={cssObj.wrapper}>
    <strong css={cssObj.title}>급여</strong>
    <div css={cssObj.writeBox}>
      <input type="text" placeholder="직접 입력하여 추가" css={cssObj.inputLine} />
      <button type="button" aria-label="입력값 추가하기" css={cssObj.enterButton}>
        <FiCornerDownLeft />
      </button>
    </div>
    <div css={cssObj.container}>
      <p css={cssObj.desc}>성과급 및 추가 수당, 연금과 관련된 정보들이 포함돼요!</p>
      <ul css={cssObj.listBox}>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
        <li>
          <p css={cssObj.valueDesc}>입력한 복지</p>
          <button type="button" aria-label="입력한 복지 제거하기" css={cssObj.deleteButton}>
            <FiMinus />
          </button>
        </li>
      </ul>
    </div>
  </div>
);
