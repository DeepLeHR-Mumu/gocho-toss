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

  inputWidth: css`
    width: 33.825rem;
  `,

  desWidth: css`
    width: 43.825rem;
    height: 8rem;
    ${TEXT.BODY2_R1624};
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;

    & > p {
      width: 5.625rem;
      ${TEXT.TITLE5_M1620};
    }
  `,

  textareaLabel: css`
    align-self: flex-start;
    padding: 1rem 0;
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
