import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";
import { commonCssObj } from "@/styles";

export const cssObj = {
  spinnerBox: css`
    position: relative;
    width: 100%;
    min-height: 30vh;
  `,

  addressWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  addAddressButton: css`
    display: flex;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem 2rem;
    background-color: ${NEWCOLORS.WHITE};
    ${TEXTS.TITLE4};
  `,

  inputWrapper: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 1rem;
  `,

  hiddenInput: css`
    display: none;
  `,

  titleWrapper: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
  `,

  radioLabel: css`
    margin-left: 0.5rem;
  `,

  errorMessageRight: css`
    margin-left: 1rem;
    ${commonCssObj.errorMessage}
    font-size: 0.875rem;
  `,

  errorMessageBottom: css`
    position: absolute;
    top: 3.5rem;
    ${commonCssObj.errorMessage}
    font-size: 0.875rem;
  `,

  customInput: (width: number, isError: boolean) => css`
    ${commonCssObj.input(width, isError)}
    :disabled {
      background-color: ${NEWCOLORS.WHITE};
    }
  `,

  errorRadioButton: css`
    border-color: ${NEWCOLORS.RED300};
  `,
};
