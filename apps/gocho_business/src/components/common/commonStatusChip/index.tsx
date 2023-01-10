import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { CommonStatusChipProps } from "./type";

export const CommonStatusChip: FunctionComponent<CommonStatusChipProps> = ({ status }) => {
  const translater = () => {
    if (status === "진행중") {
      return "승인됨";
    }
    if (status === "등록대기" || status === "수정대기") {
      return "검수중";
    }
    if (status === "수정반려" || status === "등록반려") {
      return "반려됨";
    }
    return "등록전";
  };

  return <div css={cssObj.wrapper(translater())}>{translater()}</div>;
};
