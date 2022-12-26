import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  titleContainer: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  `,

  positionTitle: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 1rem;
  `,

  openCardButton: css`
    height: 2.5rem;
    border-radius: 2rem;
    padding: 0 1rem;
    color: ${COLORS.GRAY30};
    background-color: ${COLORS.GRAY80};
  `,

  copyPositionButton: css`
    height: 2.5rem;
    border: 1px solid ${COLORS.GRAY10};
    padding: 0 1rem;
  `,

  deletePositionButton: css`
    height: 2.5rem;
    background-color: ${COLORS.GRAY30};
    color: ${COLORS.GRAY100};
    padding: 0 1rem;
  `,

  inputContainer: css`
    display: flex;
    align-items: flex-start;
    gap: 0 2rem;
  `,

  flexBox: css`
    display: flex;
  `,

  inputLine: css`
    border: 1px solid ${COLORS.GRAY10};
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,
};
