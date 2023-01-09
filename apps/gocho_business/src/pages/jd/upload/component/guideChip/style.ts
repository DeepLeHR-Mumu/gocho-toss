import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
    border-radius: 2rem;
    background-color: ${COLORS.GRAY30};
    width: fit-content;
    padding: 0 0.5rem;

    > span {
      color: ${COLORS.GRAY100};
      word-break: keep-all;
    }
  `,
};
