import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  spinnerBox: css`
    position: relative;
    width: 100%;
    min-height: 30vh;
  `,

  pageContainer: css`
    position: relative;
  `,

  cardContainer: css`
    padding: 2rem;
    margin: 1rem 0;
    background-color: ${COLORS.GRAY95};
    box-shadow: 0 0 8px rgba(85, 85, 85, 0.25);
    border-radius: 5px;
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
