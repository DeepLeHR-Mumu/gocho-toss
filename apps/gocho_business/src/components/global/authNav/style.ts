import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  headerWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    background-color: ${COLOR.WHITE};
    border-bottom: 1px solid ${COLOR.GRAY200};
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
