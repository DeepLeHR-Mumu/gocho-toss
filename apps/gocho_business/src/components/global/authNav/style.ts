import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  headerWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    background-color: ${NEWCOLORS.WHITE};
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  logoBox: css`
    position: relative;
    width: 12rem;
    height: 2rem;

    > img {
      object-fit: contain;
    }
  `,
};
