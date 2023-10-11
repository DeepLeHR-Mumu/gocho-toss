import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

const paginationItem = css`
  padding: 0.675rem;
  color: ${COLOR.GRAY600};
  ${NEWTEXTS.TITLE5_M1620}
`;

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
  `,

  pageNumber: css`
    width: 2.5rem;
    height: 2.5rem;
    ${paginationItem}
  `,

  selected: css`
    border-radius: 0.5rem;
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLACK};
  `,

  prevWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    padding: 0.675rem;
  `,

  prevText: css`
    ${paginationItem}
    ${NEWTEXTS.TITLE5_M1620}
    padding: 0;
  `,

  prevIcon: css`
    padding: 0;
    ${paginationItem}
  `,

  prevPrevIcon: css`
    padding: 0;
    ${paginationItem}
  `,

  nextWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    padding: 0.675rem;
  `,

  nextText: css`
    ${paginationItem}
    ${NEWTEXTS.TITLE5_M1620}
    padding: 0;
  `,

  nextNextIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    color: ${COLOR.GRAY600};
  `,
};
