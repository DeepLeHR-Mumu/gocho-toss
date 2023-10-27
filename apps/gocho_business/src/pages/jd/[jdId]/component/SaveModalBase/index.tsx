import { FiX, FiCheckCircle } from "react-icons/fi";

import { Button, Divider, Modal, ThreeDots } from "shared-ui/deeple-ds";

import { cssObj } from "./style";
import { SaveModalBaseProps } from "./type";
import { SAVE_MODAL_STEP } from "../constant";

export const SaveModalBase = ({ type, applicantsNumber, cancel, save, step }: SaveModalBaseProps) => (
  <Modal>
    {step === SAVE_MODAL_STEP.SAVE && (
      <div css={cssObj.container}>
        <div css={cssObj.header}>
          <h3>{type === "file" ? "파일" : "엑셀"} 저장</h3>
          <button type="button" onClick={cancel}>
            <FiX css={cssObj.close} />
          </button>
        </div>
        <Divider />
        <div css={cssObj.contentsWrapper}>
          <div css={cssObj.row}>
            <span>대상자</span>
            {applicantsNumber === 0 ? <p>전체</p> : <p>{applicantsNumber} 명</p>}
          </div>
          <div css={cssObj.row}>
            <span>저장 항목</span>
            <p>
              아래의 항목들이 저장됩니다.
              <br />
              <span>
                {type === "file" ? "이력서, 첨부파일" : "프로필 사진 , 이름, 생년월일, 최종 학력, 최종 학교, 총 경력"}
              </span>
            </p>
          </div>
        </div>
        <div css={cssObj.buttonGroup}>
          <Button size="small" color="outlineGray" onClick={cancel}>
            취소
          </Button>
          <Button size="small" onClick={save}>
            저장하기
          </Button>
        </div>
      </div>
    )}
    {step === SAVE_MODAL_STEP.LOADING && (
      <div css={cssObj.container}>
        <div css={cssObj.header}>
          <h3>저장하기</h3>
          <button type="button" onClick={cancel}>
            <FiX css={cssObj.close} />
          </button>
        </div>
        <Divider />
        <div css={cssObj.loadingContentsWrapper}>
          <div>
            <ThreeDots />
          </div>
          <p>
            지원자{applicantsNumber !== 0 ? <span>{` ${applicantsNumber}`}명</span> : ""}의 파일을 저장하고 있습니다.
            <br />
            잠시만 기다려주세요.
          </p>
        </div>
      </div>
    )}
    {step === SAVE_MODAL_STEP.COMPLETE && (
      <div css={cssObj.container}>
        <div css={cssObj.header}>
          <h3>저장하기</h3>
          <button type="button" onClick={cancel}>
            <FiX css={cssObj.close} />
          </button>
        </div>
        <Divider />
        <div css={cssObj.completeContentsWrapper}>
          <div>
            <FiCheckCircle />
          </div>
          <p>저장이 완료되었습니다.</p>
        </div>
      </div>
    )}
    {step === SAVE_MODAL_STEP.ERROR && (
      <div css={cssObj.container}>
        <div css={cssObj.header}>
          <h3>저장에 실패했습니다</h3>
          <button type="button" onClick={cancel}>
            <FiX css={cssObj.close} />
          </button>
        </div>
        <Divider />
        <p css={cssObj.errorDescription}>이력서를 저장할 지원자를 다시 선택해주세요.</p>
        <div css={cssObj.errorButtonWrapper}>
          <Button size="small" color="outlineGray" onClick={cancel}>
            확인
          </Button>
        </div>
      </div>
    )}
  </Modal>
);
