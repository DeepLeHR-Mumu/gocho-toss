import { css } from "@emotion/react";

import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  flexBox: css`
    display: flex;
    align-items: center;
    gap: 3rem;
  `,

  dataWrapper: css`
    display: flex;
    gap: 1rem;
  `,

  dataTitle: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY500};
  `,

  data: css`
    ${TEXT.BODY3_R1422};
  `,

  body: css`
    ${TEXT.BODY2_R1624};
    margin: 2rem 0;
  `,
};
