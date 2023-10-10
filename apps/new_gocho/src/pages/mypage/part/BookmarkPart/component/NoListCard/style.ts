import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  listWrapper: css`
    width: 100%;
    height: 24.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.75rem;
  `,

  text: css`
    color: ${NEWCOLORS.GRAY600};
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  `,

  linkTextWrapper: css`
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
    p {
      color: ${NEWCOLORS.BLUE300};
      text-align: center;
      font-size: 1rem;
      line-height: 1.25rem;
    }
  `,

  linkIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.BLUE300};
    line-height: 1.25rem;
  `,
};
