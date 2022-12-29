import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { OutPutStatusType } from "./type";

export const cssObj = {
  wrapper: (status: OutPutStatusType) => {
    let backgroundColor = css``;
    if (status === "등록전") {
      backgroundColor = css`
        background-color: ${COLORS.GRAY30};
      `;
    }
    if (status === "검수중") {
      backgroundColor = css`
        background-color: #e2a20f;
      `;
    }
    if (status === "승인됨") {
      backgroundColor = css`
        background-color: #199e16;
      `;
    }
    if (status === "반려됨") {
      backgroundColor = css`
        background-color: ${COLORS.ERROR_RED30};
      `;
    }
    return css`
      ${backgroundColor}
      color: ${COLORS.GRAY100};
      border-radius: 1.5rem;
      font-size: 0.75rem;
      padding: 0.375rem 0.5rem;
      width: fit-content;
    `;
  },
};
