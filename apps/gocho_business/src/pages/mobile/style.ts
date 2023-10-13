import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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
    ${TEXTS.BODY2}
  `,

  inquiry: css`
    margin-top: 0.5rem;
    color: ${COLOR.GRAY600};
    ${TEXTS.BODY1}
  `,
};
