import { css } from "@emotion/react";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
  `,

  inputWrapper: css`
    flex-grow: 1;
  `,

  payLabelContainer: css`
    margin-bottom: 1rem;
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
