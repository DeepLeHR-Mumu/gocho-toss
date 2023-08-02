import { css } from "@emotion/react";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  default: css`
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    ${TEXTS.TITLE6}
  `,

  contentFit: css`
    padding: 0.75rem 1.25rem;
    border-radius: 1.875rem;
    ${TEXTS.TITLE6}
  `,

  short: css`
    border-radius: 0.5rem;
    width: 8.75rem;
    height: 2.75rem;

    // TODO media 쿼리 추가
  `,

  long: css`
    border-radius: 0.75rem;
    width: 24.5rem;
    height: 3.25rem;
    ${TEXTS.TITLE7}// TODO media 쿼리 추가
  `,
};
