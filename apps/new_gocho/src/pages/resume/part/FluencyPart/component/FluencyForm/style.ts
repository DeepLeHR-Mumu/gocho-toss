import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
    display: flex;
    gap: 1.75rem;
    flex-direction: column;
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;

    & > p {
      width: 5.625rem;
      ${TEXT.TITLE5_M1620};
    }
  `,

  inputBox: css`
    display: flex;
    gap: 3.25rem;
  `,

  required: css`
    color: ${COLOR.BLUE300};
    ${TEXT.TITLE5_M1620};
  `,

  buttonWrapper: css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.25rem;
  `,
};
