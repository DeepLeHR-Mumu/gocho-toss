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
    gap: 0 1rem;
    margin-bottom: 1rem;
  `,

  taskContainer: css`
    position: relative;
    width: 20rem;
    cursor: pointer;
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

  radioLabel: css`
    margin-left: 0.25rem;
  `,

  borderLine: css`
    height: 1.25rem;
    border-left: 1px solid ${NEWCOLORS.GRAY200};
    margin: 0 1rem;
  `,

  optionalInputContainer: css`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
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
};
