import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

import { commonCssObj } from "@/styles";

export const cssObj = {
  partContainer: css`
    display: flex;
    flex-direction: column;
  `,

  subContainerTitle: css`
    ${TEXTS.TITLE11};
    display: block;
    margin-bottom: 2rem;
  `,

  subContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;

    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  `,

  dash: css`
    color: ${NEWCOLORS.GRAY450};
    margin: 0 8px;
  `,

  fileAddButton: css`
    display: flex;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem 2rem;
    margin-left: 1.25rem;
    background-color: ${NEWCOLORS.WHITE};
    cursor: pointer;
    ${TEXTS.TITLE4};
  `,

  customInput: (width: number, isError: boolean) => css`
    ${commonCssObj.input(width, isError)}

    &:disabled {
      background-color: ${NEWCOLORS.WHITE};
    }
  `,

  errorWrapper: css`
    position: relative;
  `,

  certFileError: css`
    position: absolute;
    top: 3.5rem;
    left: 0;
    ${commonCssObj.errorMessage}
    font-size: 0.875rem;
  `,
};
