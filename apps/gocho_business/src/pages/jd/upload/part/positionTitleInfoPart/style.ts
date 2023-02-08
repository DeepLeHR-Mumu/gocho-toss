import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  titleContainer: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
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
    background-color: #ffc8c8;
    color: ${COLORS.GRAY10};
    padding: 0 1rem;
  `,

  container: css`
    margin-bottom: 1.5rem;
  `,

  inputTitle: (isError: boolean) => css`
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    margin-bottom: 0.25rem;
  `,

  taskInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 2rem;
  `,

  taskContainer: css`
    position: relative;
    width: 20rem;
    height: 2.5rem;
    cursor: pointer;
  `,

  taskList: (isOpen: boolean) => css`
    position: absolute;
    top: 2.75rem;
    left: 0;
    width: 100%;
    max-height: ${isOpen ? "20rem" : 0};
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 20;
    border: ${isOpen ? `1px solid ${COLORS.GRAY30}` : 0};

    ::-webkit-scrollbar {
      width: 0.5rem;
      background-color: ${COLORS.GRAY90};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${COLORS.GRAY60};
    }
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 20rem;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: ${COLORS.GRAY100};
    color: ${COLORS.GRAY30};
    transition: 0.1s;

    :hover {
      background-color: ${COLORS.GRAY80};
    }
  `,

  input: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
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

  desc: (isErrorMessage: boolean) => css`
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: ${isErrorMessage ? COLORS.ERROR_RED40 : COLORS.GRAY10};
  `,

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  arrayErrorMessage: css`
    position: absolute;
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  inputContainer: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.75rem 2rem;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
  `,

  erasableInput: (width: number) => css`
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    width: ${width}rem;
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY100};

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,

  addButtonWrapper: css`
    margin-left: 0.5rem;
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

  hireNumberCover: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.GRAY10};
    width: 6rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${COLORS.GRAY100};
    font-weight: 400;
  `,

  hireNumberResetButton: css`
    margin-left: 1rem;
  `,

  hireNumberInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,
};
