import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  container: css`
    position: absolute;
    top: -4.5rem;
    left: -0.5rem;
  `,

  textArea: css`
    width: 18.75rem;
    padding: 0.5rem 1rem;
    background-color: ${COLOR.BLUE100};
    ${TEXT.BODY3_R1422}
    color: ${COLOR.GRAY700};
    border-radius: 0.5rem;
  `,

  arrowTip: css`
    width: 0;
    height: 0;
    border-bottom: 0.5rem solid transparent;
    border-top: 0.5rem solid ${COLOR.BLUE100};
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    position: relative;
    left: 1rem;
  `,
};
