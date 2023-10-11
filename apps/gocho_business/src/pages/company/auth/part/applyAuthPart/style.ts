import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

import { commonCssObj } from "@/styles";

export const cssObj = {
  partContainer: css`
    flex-grow: 1;
    width: 59.5rem;
    position: relative;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;

    & > form > section {
      border: none;
      box-shadow: none;
      padding: 0;
    }
  `,

  spinner: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
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

  svg: css`
    margin-left: 0.5rem;
  `,

  dash: css`
    color: ${COLOR.GRAY450};
    margin: 0 8px;
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

  customInput: (width: number, isError: boolean) => css`
    ${commonCssObj.input(width, isError)}

    &:disabled {
      background-color: ${COLOR.GRAY100};
    }
  `,

  footerContainer: css`
    display: flex;
    justify-content: center;
    aligh-items: center;
  `,

  submitButton: css`
    width: 11.25rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    background-color: ${COLOR.BLUE300};
    border-radius: 0.5rem;
    ${TEXTS.TITLE6};
    color: ${COLOR.WHITE};
    margin-top: 3rem;
    margin-bottom: 1.25rem;

    &:disabled {
      background-color: ${COLOR.GRAY200};
      color: ${COLOR.GRAY450};
      cursor: not-allowed;
    }
  `,

  confirmDescriptionWrapper: css`
    width: 100%;

    & > li {
      ${TEXTS.BODY4}
      &:first-child {
        ${TEXTS.BODY5}
        color: ${COLOR.RED300};
      }
    }
  `,
};
