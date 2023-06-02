import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  optionContainer: css`
    position: relative;
    cursor: pointer;
  `,

  hiddenInput: css`
    display: none;
  `,

  rotationInnerText: css`
    white-space: nowrap;
    overflow: hidden;
  `,

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,
};
