import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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
    gap: 0 1.25rem;
    margin-bottom: 1rem;
  `,

  taskContainer: css`
    position: relative;
    width: 20rem;
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

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  hireNumberContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  hireNumberButton: css`
    height: 2.25rem;
    margin-top: 1rem;
    padding: 0 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUEGRAY400};
    border-radius: 0.5rem;
  `,

  hireNumberCover: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    width: 6.625rem;
    height: 3.25rem;
    background-color: ${NEWCOLORS.GRAY200};
    padding: 0 1rem;
    font-weight: 400;
  `,

  hireNumberResetButton: css`
    margin-left: 1rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border-radius: 5px;
    border: 1px solid ${COLORS.GRAY65};
    background-color: ${COLORS.GRAY90};
  `,

  labelContainer: css`
    display: flex;
    gap: 0 2.5rem;
    height: 2.25rem;
    margin-right: 1rem;
  `,

  radioLabel: css`
    margin-left: 0.25rem;
  `,

  borderLine: css`
    height: 1.25rem;
    border-left: 1px solid ${NEWCOLORS.GRAY200};
  `,

  optionalInputContainer: css`
    display: flex;
    align-items: center;
    padding-left: 1rem;
  `,

  optionalInput: css`
    display: flex;
    align-items: center;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    width: 3.5rem;
    margin: 0 0.5rem 0 1rem;
    padding: 0.5rem 0.875rem;
    font-weight: 400;
    ${TEXTS.TITLE4};
  `,

  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,

  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.625rem;
        height: 0.625rem;
        background-color: ${COLORS.GRAY10};
        border-radius: 50%;
        content: "";
      }
    }
  `,

  radioBox: css`
    border: 2px solid ${COLORS.GRAY10};
    width: 1.125rem;
    position: relative;
    height: 1.125rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 50%;
  `,
};
