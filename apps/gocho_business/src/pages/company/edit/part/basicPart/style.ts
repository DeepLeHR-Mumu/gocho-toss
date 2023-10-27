import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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

  inputWrapper: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 1rem;
  `,

  selectPlaceholder: css`
    color: ${COLOR.GRAY450};
  `,

  checkbox: css`
    margin-right: 0.6875rem;
  `,

  errorMessageWrapper: css`
    margin-left: 2rem;
  `,

  addAddressButton: css`
    display: flex;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem 2rem;
    background-color: ${COLOR.WHITE};
    ${TEXTS.TITLE4};
  `,

  hiddenInput: css`
    display: none;
  `,

  titleWrapper: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
  `,

  nozoLabelContainer: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
    gap: 0 2.5rem;
    margin-bottom: 1rem;
  `,

  radioLabel: css`
    margin-left: 0.5rem;
  `,
};
