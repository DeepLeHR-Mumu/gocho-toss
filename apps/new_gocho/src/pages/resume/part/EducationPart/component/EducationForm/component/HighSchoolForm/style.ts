import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  inputWrapper: css`
    display: flex;
    align-items: center;

    & > p {
      width: 5.625rem;
      ${TEXT.TITLE5_M1620};
    }
  `,

  schoolInput: css`
    width: 32.3rem;
  `,

  etcInput: css`
    width: 43.5rem;
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

  attendanceLabel: css`
    align-items: start;
  `,
};
