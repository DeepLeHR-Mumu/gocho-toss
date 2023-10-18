import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  editMsg: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};

    b {
      ${TEXT.UNDERLINE2_M1418};
      color: ${COLOR.BLUE300};
    }
  `,
};
