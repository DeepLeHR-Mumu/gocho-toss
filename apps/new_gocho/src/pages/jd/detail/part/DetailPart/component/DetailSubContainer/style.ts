import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  subContainer: css`
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;

    :last-of-type {
      padding-bottom: 0;
    }
  `,

  title: css`
    ${TEXT.TITLE1_B2832}
    margin-bottom: 1.75rem;
  `,

  contentWrapper: css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  `,

  rowWrapper: css`
    display: flex;
    ${TEXT.BODY1_R1826}

    span:first-of-type {
      flex-direction: row;
      flex-basis: 7.1875rem;
      flex-shrink: 0;
      color: ${COLOR.GRAY600};
    }
  `,
};
