import { css } from "@emotion/react";

export const cssObj = {
  inputWrapper: css`
    flex-grow: 1;
  `,

  labelContainer: css`
    display: flex;
  `,

  rotationContainer: css`
    position: relative;
    cursor: pointer;
    margin-right: 2rem;
  `,

  hiddenInput: css`
    display: none;
  `,

  rotationInnerText: css`
    white-space: nowrap;
    overflow: hidden;
  `,
};
