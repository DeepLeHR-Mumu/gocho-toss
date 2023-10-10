import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  titleWrapper: (isValid = true) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    ${isValid ? `color: ${NEWCOLORS.BLACK};` : `color: ${NEWCOLORS.GRAY600};`}

    h3 {
      margin-bottom: 1.75rem;
      ${NEWTEXTS.TITLE1_B2832}
    }
  `,

  jdNumber: css`
    margin-bottom: 2rem;
    ${NEWTEXTS.TITLE5_M1620}
  `,

  jdWrapper: css`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.25rem;
  `,

  seeMoreButton: css`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 1.0625rem;
    color: ${NEWCOLORS.GRAY600};
    ${NEWTEXTS.TITLE4_M1822}

    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.GRAY450};
    }
  `,

  noJd: css`
    height: 11.0625rem;
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    ${NEWTEXTS.TITLE4_M1822}
  `,
};
