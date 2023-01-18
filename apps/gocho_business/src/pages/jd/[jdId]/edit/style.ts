import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  pageContainer: css`
    position: relative;
  `,

  cardContainer: css`
    padding: 2rem;
    margin: 2.5rem 0;
    background-color: ${COLORS.GRAY95};
    border-left: 1px solid ${COLORS.GRAY70};
    border-right: 1px solid ${COLORS.GRAY70};
  `,

  submitButton: css`
    height: 3rem;
    margin: 0 auto;
    width: 30%;
    background-color: ${COLORS.BLUE_FIRST40};
    border-radius: 0.5rem;
    color: ${COLORS.GRAY100};
  `,

  buttonContainer: css`
    display: flex;
    justify-content: flex-end;
    gap: 0 0.5rem;
  `,
};
