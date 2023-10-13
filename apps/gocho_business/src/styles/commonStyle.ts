import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const commonCssObj = {
  partContainer: css`
    background-color: ${COLOR.WHITE};
    margin-top: 1.25rem;
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  partTitle: css`
    ${TEXT.TITLE1_B2832};
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
    ${TEXT.TITLE4_B1822};
    margin-top: ${hasMargin ? "1rem" : 0};
    width: 8.25rem;

    :after {
      content: "·";
      color: ${COLOR.BLUE300};
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
    ${TEXT.TITLE4_B1822};
  `,

  select: (width: number, isError: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${isError ? `${COLOR.RED300}` : `${COLOR.GRAY200}`};
    border-radius: 0.5rem;
    width: ${width}rem;
    height: 3.25rem;
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXT.TITLE5_M1620};
      color: ${COLOR.GRAY450};
    }

    :disabled {
      background-color: ${COLOR.GRAY100};
    }
  `,

  optionList: (isOpen: boolean, maxHeight: number) => css`
    position: absolute;
    top: 3.75rem;
    left: 0;
    width: 100%;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;
    max-height: ${isOpen ? `${maxHeight}rem` : 0};
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 20;
    background-color: ${COLOR.WHITE};
    border: ${isOpen ? `1px solid ${COLOR.GRAY600}` : 0};

    ::-webkit-scrollbar {
      padding: 0.25rem 0;
      width: 0.5rem;
      background-color: ${COLOR.WHITE};
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: ${COLOR.GRAY400};
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
    background-color: ${COLOR.WHITE};
    transition: 0.1s;
    ${TEXT.TITLE5_M1620};

    :hover {
      background-color: ${COLOR.GRAY100};
    }
  `,

  textarea: css`
    width: 100%;
    max-width: 59.625rem;
    height: 5.75rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXT.TITLE5_M1620};
      color: ${COLOR.GRAY450};
    }
  `,

  input: (width: number, isError: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${isError ? `${COLOR.RED300}` : `${COLOR.GRAY200}`};
    border-radius: 0.5rem;
    width: ${width}rem;
    height: 3.25rem;
    padding: 0 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXT.TITLE5_M1620};
      color: ${COLOR.GRAY450};
    }

    :disabled {
      background-color: ${COLOR.GRAY100};
    }
  `,

  arrayInputContainer: css`
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 59.625rem;
    gap: 0.5rem;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  labelContainer: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
    gap: 0 2.5rem;
    margin-right: 2rem;
  `,

  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 0 0.25rem;
    ${TEXT.TITLE5_M1620};

    > input {
      margin: 0;
    }
  `,

  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      border-color: ${COLOR.BLUE300};

      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
        height: 0.75rem;
        background-color: ${COLOR.BLUE300};
        border-radius: 50%;
        content: "";
      }
    }
  `,

  radioBox: css`
    border: 1.5px solid ${COLOR.GRAY450};
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    background-color: ${COLOR.WHITE};
    border-radius: 50%;
    margin-right: 0.25rem;
  `,

  errorMessage: css`
    font-size: 0.75rem;
    color: ${COLOR.RED300};
  `,

  addButtonWrapper: css`
    margin-left: 0.5rem;
  `,
};
