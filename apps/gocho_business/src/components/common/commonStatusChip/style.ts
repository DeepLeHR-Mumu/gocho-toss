import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

import { OutPutStatusType } from "./type";

export const cssObj = {
  wrapper: (status: OutPutStatusType) => {
    let fontColor = css``;
    if (status === "진행중") {
      fontColor = css`
        color: ${COLOR.BLUE250};
      `;
    }
    if (status === "공고마감") {
      fontColor = css`
        color: ${COLOR.GRAY600};
      `;
    }
    if (status === "대기중") {
      fontColor = css`
        color: ${COLOR.GREEN300};
      `;
    }
    if (status === "반려") {
      fontColor = css`
        color: ${COLOR.RED200};
      `;
    }
    return css`
      ${TEXT.TITLE5_M1620};
      ${fontColor};
      margin-bottom: 0.5rem;
    `;
  },
};
