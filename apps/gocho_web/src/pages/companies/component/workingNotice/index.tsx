import { FunctionComponent } from "react";
import { flexBox, workingInfo, requestChangeButton } from "./style";
import { WorkingNoticeProps } from "./type";

export const WorkingNotice: FunctionComponent<WorkingNoticeProps> = ({ info }) => {
  return (
    <div css={flexBox}>
      <p css={workingInfo}>혹시 재직자이신가요?</p>
      {/* LATER : 정보수정 요청은 어떻게? */}
      <button type="button" css={requestChangeButton}>
        {info} 정보 수정 요청하기 +
      </button>
    </div>
  );
};
