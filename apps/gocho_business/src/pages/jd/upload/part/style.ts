import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
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
    }
  `,

  optionList: (isOpen: boolean) => css`
    position: absolute;
    top: 3.75rem;
    left: 0;
    width: 100%;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    max-height: ${isOpen ? "20rem" : 0};
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 20;
    border: ${isOpen ? `1px solid ${COLORS.GRAY30}` : 0};

    ::-webkit-scrollbar {
      width: 0.5rem;
      background-color: ${COLORS.GRAY90};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${COLORS.GRAY60};
    }
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 0.25rem;
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: ${COLORS.GRAY100};
    color: ${COLORS.GRAY30};
    transition: 0.1s;

    :hover {
      background-color: ${COLORS.GRAY80};
    }
  `,

  textarea: css`
    width: 100%;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  input: (width: number, isError: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${isError ? `${NEWCOLORS.RED300}` : `${NEWCOLORS.GRAY200}`};
    border-radius: 0.5rem;
    width: ${width}rem;
    height: 3.25rem;
    padding: 0 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  addInputButton: css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.5rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${NEWCOLORS.GRAY50};
    ${TEXTS.TITLE5};

    > svg {
      color: ${NEWCOLORS.GRAY300};
    }
  `,
};
