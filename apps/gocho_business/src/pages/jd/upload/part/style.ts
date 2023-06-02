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
    align-items: center;
    margin-bottom: 2.5rem;
  `,

  longContainer: css`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.5rem;
  `,

  inputTitle: (hasMargin: boolean) => css`
    display: flex;
    align-items: center;
    ${TEXTS.TITLE9};
    margin-top: ${hasMargin ? "1rem" : 0};
    width: 8.25rem;

    :after {
      content: "·";
      color: ${NEWCOLORS.BLUE300};
      line-height: 0.5;
      font-size: 2rem;
      font-weight: 700;
      margin-left: 0.5rem;
      margin-bottom: 0.25rem;
    }
  `,

  optionalInputTitle: (hasMargin: boolean) => css`
    display: flex;
    align-items: center;
    width: 8.25rem;
    margin-top: ${hasMargin ? "1rem" : 0};
    ${TEXTS.TITLE9};
  `,

  select: (width: number) => css`
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
      color: ${NEWCOLORS.GRAY300};
  `,

  textarea: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    width: 100%;
    height: 5.25rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
      color: ${NEWCOLORS.GRAY300};
  `,

  input: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    width: ${width}rem;
    height: 3.25rem;
    padding: 0 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
      color: ${NEWCOLORS.GRAY300};
  `,
};
