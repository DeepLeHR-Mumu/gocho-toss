import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
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
        color: ${NEWCOLORS.BLUEGRAY400};
      `;
    }
    if (status === "대기중") {
      fontColor = css`
        color: ${NEWCOLORS.GREEN};
      `;
    }
    if (status === "반려") {
      fontColor = css`
        color: ${NEWCOLORS.RED200};
      `;
    }
    return css`
      ${fontColor};
      font-size: 1.125rem;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    `;
  },
};
