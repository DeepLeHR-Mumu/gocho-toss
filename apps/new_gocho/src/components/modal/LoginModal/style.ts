import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    width: 28.5rem;
    height: 41.125rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1.25rem;
    padding: 1.5rem;
    background-color: ${COLOR.WHITE};
    overflow: auto;

    ${TEMP} {
      width: 100%;
      height: 100%;
      border-radius: 0;
      padding: 0;
    }
  `,
};
