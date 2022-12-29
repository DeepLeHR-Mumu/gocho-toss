import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  positionTitle: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,

  positionButtonContainer: css`
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

  container: css`
    margin-top: 2rem;
    p {
      line-height: 2;
    }
  `,

  taskInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 2rem;
  `,

  input: (width: number) => css`
    border: 1px solid ${COLORS.GRAY10};
    width: ${width}rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${COLORS.GRAY100};
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  desc: css`
    font-size: 0.75rem;
  `,

  inputContainer: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2rem;
  `,

  inputLabel: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${width}rem;
    height: 2.5rem;
    border: 1px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    padding: 0 0.5rem 0 1rem;
  `,

  inputWithButton: css`
    font-size: 1rem;
    width: calc(100% - 3rem);
    font-weight: 400;
    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,

  hireNumberContainer: css`
    display: flex;
    align-items: center;
    gap: 0 2rem;
  `,

  hireNumberButton: css`
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    border-radius: 0.5rem;
  `,

  hireNumberInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.55rem;
  `,
};
