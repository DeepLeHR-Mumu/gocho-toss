import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

import { OutPutStatusType } from "./type";

export const cssObj = {
  wrapper: (status: OutPutStatusType) => {
    let fontColor = css``;
    if (status === "진행중") {
      fontColor = css`
        color: ${NEWCOLORS.BLUE250};
      `;
    }
    if (status === "공고마감") {
      fontColor = css`
        color: ${NEWCOLORS.GRAY600};
      `;
    }
    if (status === "대기중") {
      fontColor = css`
        color: ${NEWCOLORS.GREEN300};
      `;
    }
    if (status === "반려") {
      fontColor = css`
        color: ${NEWCOLORS.RED200};
      `;
    }
    return css`
      ${TEXTS.TITLE6};
      ${fontColor};
      margin-bottom: 0.5rem;
    `;
  },
};
