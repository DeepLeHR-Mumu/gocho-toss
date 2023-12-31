import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

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
  `,
};
