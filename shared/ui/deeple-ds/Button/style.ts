import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  default: css`
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    ${NEWTEXTS.TITLE6}
  `,

  // bookmark
  icon: css`
    width: fit-content;
    border-radius: 0.5rem;
    padding: 0.75rem;
  `,

  // black chip
  blackChip: css`
    width: fit-content;
    border-radius: 1.5rem;
    padding: 0.5625rem 0.875rem;
    ${NEWTEXTS.TITLE12}

    ${MOBILE} {
      border-radius: 0.5rem;
      padding: 0.3125rem; 0.59375rem;
      ${NEWTEXTS.TITLE3}
    }
  `,

  // follow button
  followButton: css`
    width: fit-content;
    border-radius: 1.875rem;
    padding: 0.75rem 1.25rem;
    ${NEWTEXTS.TITLE6}

    // NOTE 수정해야할지도
    ${MOBILE} {
      padding: 0.4375rem 0.875rem;
      ${NEWTEXTS.TITLE4};
    }
  `,

  // filter button
  filterButton: css`
    width: fit-content;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    ${NEWTEXTS.TITLE9}
  `,

  140: css`
    width: 8.75rem;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;

    height: 2.75rem;
    ${NEWTEXTS.TITLE8}

    ${MOBILE} {
      ${NEWTEXTS.TITLE6}
    }
  `,

  392: css`
    width: 24.5rem;
    border-radius: 0.75rem;
    padding: 0.75rem 1rem;
    // height: 3.25rem;
    ${NEWTEXTS.TITLE9}

    ${MOBILE} {
      width: 20.5rem;
      // height: 2.75rem;
      ${NEWTEXTS.TITLE6}
    }
  `,
};
