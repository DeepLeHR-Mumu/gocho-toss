import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
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
    color: ${COLOR.GRAY600};
    margin: 0 0.75rem;
    font-size: 1rem;
    transition: all 0.2s ease-in;
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
    background-color: ${isActivePage ? COLOR.BLUE100 : "none"};
    color: ${isActivePage ? COLOR.BLACK : COLOR.GRAY600};
  `,
};
