import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  hiddenInput: css`
    display: none;
  `,

  inputWrapper: css`
    flex-grow: 1;
  `,

  taskSelectContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin-bottom: 1rem;
  `,

  taskContainer: css`
    position: relative;
    cursor: pointer;
  `,

  mainTaskOption: (isSelected: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 0.25rem;
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: ${COLOR.WHITE};
    transition: 0.1s;
    color: ${isSelected ? `${COLOR.BLUE300}` : `${COLOR.BLACK}`};
    ${TEXT.TITLE5_M1620};

    :hover {
      background-color: ${COLOR.GRAY100};
    }
  `,

  errorMessageContainer: css`
    line-height: 1.5;
  `,

  hireNumberContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  hireNumberCover: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;
    width: 6.625rem;
    height: 3.25rem;
    background-color: ${COLOR.GRAY200};
    padding: 0 1rem;
    font-weight: 400;
  `,

  hireNumberResetButton: css`
    margin-left: 1rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border-radius: 5px;
    border: 1px solid ${COLOR.GRAY400};
    background-color: ${COLOR.GRAY50};
  `,

  hireNumberButton: css`
    height: 2.25rem;
    margin-top: 1rem;
    padding: 0 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    color: ${COLOR.GRAY600};
    border-radius: 0.5rem;
  `,

  radioLabel: css`
    margin-left: 0.25rem;
  `,

  borderLine: css`
    height: 1.25rem;
    border-left: 1px solid ${COLOR.GRAY200};
    margin-right: 1rem;
  `,

  optionalInputContainer: css`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-right: 1rem;
  `,

  optionalInput: css`
    display: flex;
    align-items: center;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;
    width: 3.5rem;
    margin: 0 0.5rem 0 1rem;
    padding: 0.5rem 0.875rem;
    font-weight: 400;
    ${TEXT.TITLE6_M1418};
  `,

  yearInputWrapper: css`
    position: relative;
  `,

  errorMessageWrapper: css`
    position: absolute;
    margin-top: 0.25rem;
    left: 1rem;
  `,
};
