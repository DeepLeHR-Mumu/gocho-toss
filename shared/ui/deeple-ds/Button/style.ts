import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  default: css`
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    ${NEWTEXTS.TITLE6}
  `,

  contentFit: css`
    padding: 0.75rem 1.25rem;
    border-radius: 1.875rem;
    ${NEWTEXTS.TITLE6}

    // NOTE 수정해야할지도
    ${MOBILE} {
      padding: 0.4375rem 0.875rem;
      ${NEWTEXTS.TITLE4};
    }
  `,

  short: css`
    border-radius: 0.5rem;
    width: 8.75rem;
    height: 2.75rem;
    ${NEWTEXTS.TITLE8}

    ${MOBILE} {
      ${NEWTEXTS.TITLE6}
    }
  `,

  long: css`
    border-radius: 0.75rem;
    width: 24.5rem;
    height: 3.25rem;
    ${NEWTEXTS.TITLE9}

    ${MOBILE} {
      width: 20.5rem;
      height: 2.75rem;
      ${NEWTEXTS.TITLE6}
    }
  `,
};
