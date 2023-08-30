import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  categoryContainer: css`
    width: 67.5rem;
    height: 29rem;
    margin: auto 0;
    margin-top: 3rem;
    margin-bottom: 3rem;
    background-color: ${NEWCOLORS.WHITE};
  `,

  categoryBoxWrapper: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
  `,

  categoryTopBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3.5rem;
    padding-bottom: 2rem;
  `,

  categoryBottomBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    padding-bottom: 3.5rem;
  `,

  categoryHeader: css`
    font-size: 2rem;
    margin-bottom: 3rem;
  `,

  itemText: css``,
};
