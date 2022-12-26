import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  cardContainer: css`
    padding: 2rem;
    margin: 2.5rem 0;
    background-color: ${COLORS.GRAY90};
    border-top: 1px solid ${COLORS.GRAY70};
    border-bottom: 1px solid ${COLORS.GRAY70};
  `,
};
