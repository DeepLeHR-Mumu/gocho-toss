import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 100%;
  `,

  searchIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${NEWCOLORS.BLUE300};
  `,

  resetIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${NEWCOLORS.GRAY200};
  `,

  dropDownWrapper: css`
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    background-color: ${NEWCOLORS.WHITE};
    position: absolute;
    margin-top: 1rem;
    width: 100%;

    ${MOBILE} {
      width: calc(100% - 2rem);
    }
  `,

  listItem: css`
    padding: 0.25rem 1.25rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.75rem;
  `,

  word: css`
    margin-right: auto;
    ${NEWTEXTS.TITLE7}
  `,

  arrow: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.GRAY300};
  `,
};