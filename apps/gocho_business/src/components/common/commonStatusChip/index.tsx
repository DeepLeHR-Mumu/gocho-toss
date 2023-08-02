import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonStatusChipProps } from "./type";

export const CommonStatusChip: FunctionComponent<CommonStatusChipProps> = ({ status, isExpired }) => {
  const translater = () => {
    if (isExpired) {
      return "공고마감";
    }

    if (!isExpired && status === "진행중") {
      return "진행중";
    }
    if (!isExpired && (status === "등록대기" || status === "수정대기")) {
      return "대기중";
    }
    if (!isExpired && (status === "수정반려" || status === "등록반려")) {
      return "반려";
    }
    return "임시저장";
  };

  return <div css={cssObj.wrapper(translater())}>{translater()}</div>;
};
