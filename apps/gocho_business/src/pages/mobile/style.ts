import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  container: css`
    display: flex;
    width: 100dvw;
    height: 100dvh;
  `,

  flexColumn: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,

  description: css`
    text-align: center;
    ${TEXT.BODY3_R1422}
  `,

  inquiry: css`
    margin-top: 0.5rem;
    color: ${COLOR.GRAY600};
    ${TEXT.BODY4_R1220}
  `,
};
