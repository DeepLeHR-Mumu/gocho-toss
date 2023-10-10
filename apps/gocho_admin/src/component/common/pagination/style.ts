import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  paginationContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  `,

  movePageButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${NEWCOLORS.GRAY600};
    margin: 0 0.75rem;
    font-size: 1rem;
    transition: all 0.2s ease-in;

    ${PC_HOVER} {
      :hover {
        color: ${NEWCOLORS.BLACK};
      }
    }
  `,

  paginationBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  paginationButton: (isActivePage: boolean) => css`
    ${isActivePage ? TEXTS.TITLE7 : TEXTS.TITLE5};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: ${isActivePage ? NEWCOLORS.BLUE100 : "none"};
    color: ${isActivePage ? NEWCOLORS.BLACK : NEWCOLORS.GRAY600};
  `,
};
