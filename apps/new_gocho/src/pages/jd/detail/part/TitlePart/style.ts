import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  skeletonWrapper: css`
    height: 4.875rem;
  `,

  background: css`
    position: sticky;
    top: 8.75rem;
    padding: 1rem 0;
    background: ${NEWCOLORS.WHITE};
    z-index: 20;
  `,

  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  companyName: css`
    margin-right: 1.5rem;
    ${NEWTEXTS.TITLE11}
  `,

  jdTitle: css`
    margin-right: auto;
    ${NEWTEXTS.TITLE12}
  `,

  bookmarkWrapper: css`
    padding: 0.625rem;
    margin-right: 1.25rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
  `,
};
