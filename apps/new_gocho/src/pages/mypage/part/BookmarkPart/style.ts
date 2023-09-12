import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  navWrapper: css`
    margin-top: 2rem;
    display: flex;
  `,

  navItem: css`
    width: 8.75rem;
    display: flex;
    gap: 1.56rem;
    flex-direction: column;
  `,

  buttonText: css`
    color: ${NEWCOLORS.BLUEGRAY200};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.375rem;
  `,

  selectedText: css`
    color: ${NEWCOLORS.BLUE300};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.375rem;
  `,

  selectedHr: css`
    width: 8.75rem;
    border: 0.125rem solid ${NEWCOLORS.BLUE300};
    margin: 0;
    padding: 0;
  `,

  bottomHr: css`
    border: 0.0625rem solid ${NEWCOLORS.GRAY200};
    margin: 0 0 2rem 0;
    padding: 0;
  `,
};
