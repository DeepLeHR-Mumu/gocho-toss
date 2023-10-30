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

  textareaLabel: css`
    align-self: flex-start;
    padding: 1rem 0;
  `,

  schoolInput: css`
    width: 32.3rem;
  `,

  etcInput: css`
    width: 43.5rem;
    height: 5.62rem;
    ${TEXT.BODY2_R1624};
  `,

  checkbox: css`
    display: flex;
    gap: 0.5rem;
    margin-left: 1.25rem;
  `,

  required: css`
    color: ${COLOR.BLUE300};
    ${TEXT.TITLE5_M1620};
  `,

  inputFlexbox: css`
    display: flex;
    gap: 3.25rem;
  `,

  switchBox: css`
    margin-left: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & > p {
      padding-top: 0.5rem;
      ${TEXT.BODY2_R1624};
    }
  `,

  buttonWrapper: css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.25rem;
  `,
};
