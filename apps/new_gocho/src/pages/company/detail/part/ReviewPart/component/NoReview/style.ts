import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    justify-content: center;
    align-items: center;
    height: 11rem;
  `,

  text: css`
    ${TEXT.BODY1_R1826}
    color: ${COLOR.GRAY600};
    text-align: center;
  `,
};
