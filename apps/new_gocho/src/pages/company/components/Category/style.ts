import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  categoryContainer: css`
    width: 67.5rem;
    margin: auto 0;
    padding-top: 3rem;
    padding-bottom: 4.5rem;
    background-color: ${NEWCOLORS.WHITE};
  `,

  categoryBoxWrapper: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    height: 23.75rem;
    margin-top: 3rem;
    border-radius: 0.75rem;
  `,

  categoryTopBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
  `,

  categoryBottomBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
  `,
};
