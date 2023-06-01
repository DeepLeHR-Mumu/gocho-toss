import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const commonCssObj = {
  partContainer: css`
    background-color: ${NEWCOLORS.WHITE};
    margin-top: 1.25rem;
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  partTitle: css`
    ${TEXTS.TITLE11};
    display: block;
    margin-bottom: 2rem;
  `,

  container: css`
    display: flex;
    align-items: flex-start;
  `,

  inputTitle: css`
    display: flex;
    align-items: center;
    ${TEXTS.TITLE9};
    width: 8.25rem;

    :after {
      content: "·";
      color: ${NEWCOLORS.BLUE300};
      font-size: 1.5rem;
      font-weight: 700;
      margin-left: 0.5rem;
    }
  `,

  optionalInputTitle: css`
    display: flex;
    align-items: center;
    width: 8.25rem;
    ${TEXTS.TITLE9};
  `,

  input: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    width: ${width}rem;
    height: 3.25rem;
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
  `,
};
