import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
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

  tooltipWrapper: css`
    display: flex;
    align-items: center;
    position: relative;
  `,

  svg: css`
    margin-left: 0.5rem;
    color: ${COLOR.GRAY450};
  `,

  fileAddButton: css`
    display: flex;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem 2rem;
    margin-left: 1.25rem;
    background-color: ${COLOR.WHITE};
    cursor: pointer;
    ${TEXTS.TITLE4};
  `,

  errorWrapper: css`
    position: relative;
  `,

  errorMessageBottom: css`
    position: absolute;
    top: 3.5rem;
    left: 0;
    ${commonCssObj.errorMessage}
    font-size: 0.875rem;
  `,

  customInput: (width: number, isError: boolean) => css`
    ${commonCssObj.input(width, isError)}

    :disabled {
      background-color: ${COLOR.WHITE};
    }
  `,
};
