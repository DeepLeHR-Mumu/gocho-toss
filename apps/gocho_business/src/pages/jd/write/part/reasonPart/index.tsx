import { FunctionComponent } from "react";
import { FiXCircle } from "react-icons/fi";

import { ReasonPartProps } from "./type";
import { cssObj } from "./style";

export const ReasonPart: FunctionComponent<ReasonPartProps> = ({ jdData }) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.infoTitle}>
      <FiXCircle />
      <p>공고 등록이 반려되었습니다</p>
    </div>
    <div css={cssObj.infoContainer}>
      <div css={cssObj.userInfo}>
        <p css={cssObj.infoBox}>
          신청인
          <span>{jdData.uploader.name}</span>
        </p>
      </div>
      <p css={cssObj.email}>
        고객센터<span>cs@deeplehr.com</span>
      </p>
    </div>
    <div css={cssObj.reasonContainer}>
      <p css={cssObj.reasonTitle}>
        반려사유 {jdData.status.reason?.length}건{" "}
        <span>* 아래 반려 사유를 확인하시고 수정 후 재 검수 요청해 주세요</span>
      </p>
      {jdData.status.reason?.map((reason) => (
        <p key={`rejectReason${reason}`} css={cssObj.reason}>
          {reason}
        </p>
      ))}
    </div>
  </div>
);
