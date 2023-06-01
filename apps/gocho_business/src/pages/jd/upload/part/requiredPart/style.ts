import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-bottom: 1rem;
  `,

  containerWithGuide: css`
    margin-bottom: 2.5rem;
  `,

  labelContainer: css`
    display: flex;
    gap: 0 2.5rem;
    margin: 0.5rem 0 0.75rem;
  `,

  radioLabel: css`
    margin-left: 0.25rem;
  `,

  conversionRateInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  arrayErrorMessage: css`
    position: absolute;
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.625rem;
        height: 0.625rem;
        background-color: ${COLORS.GRAY10};
        border-radius: 50%;
        content: "";
      }
    }
  `,
  radioBox: css`
    border: 2px solid ${COLORS.GRAY10};
    width: 1.125rem;
    position: relative;
    height: 1.125rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 50%;
  `,

  yearInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  activatableInput: (isDisabled: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${isDisabled ? `${COLORS.GRAY70}` : `${COLORS.GRAY10}`};
    border-radius: 5px;
    color: ${isDisabled ? `${COLORS.GRAY70}` : `${COLORS.GRAY10}`};
    width: 6rem;
    height: 2.5rem;
    margin-right: 1rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${COLORS.GRAY100};
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  desc: css`
    display: flex;
    align-items: center;
    color: ${COLORS.GRAY35};
  `,

  icon: css`
    font-size: 1.5rem;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
  `,

  toggleSwitch: (isClicked: boolean, isDisabled: boolean) => css`
    display: block;
    position: relative;
    width: 2rem;
    height: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${isClicked ? `${COLORS.BLUE_SECOND40}` : `${COLORS.GRAY40}`};
    opacity: ${isDisabled ? 0.6 : 1};
    cursor: ${isDisabled ? "normal" : "pointer"};
  `,

  toggleButton: (isActivated: boolean) => css`
    width: 1.125rem;
    height: 1.125rem;
    position: absolute;
    top: 50%;
    left: ${isActivated ? "calc(100% - 1rem)" : "-0.125rem"};
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${isActivated ? `${COLORS.BLUE_FIRST40}` : `${COLORS.GRAY20}`};
    transition: all 0.2s ease-in;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
  `,

  inputContainerWithGuide: css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 3.25rem 0.5rem;
  `,

  erasableInput: (width: number) => css`
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    width: ${width}rem;
    padding: 0.5rem 1rem;
    background-color: ${COLORS.GRAY100};

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,

  guideChipContainer: css`
    position: absolute;
    display: flex;
    overflow-y: visible;
    word-break: keep-all;
    margin-top: 0.5rem;
    gap: 0.5rem;
  `,

  contractTypeWrapper: css`
    display: flex;
    gap: 0 4rem;
  `,

  optionContainer: css`
    position: relative;
    width: 20rem;
    height: 2.5rem;
    cursor: pointer;
  `,

  input: (width: number) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    width: ${width}rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${COLORS.GRAY100};
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  optionList: (isOpen: boolean) => css`
    position: absolute;
    top: 2.75rem;
    left: 0;
    width: 100%;
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
    width: 20rem;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: ${COLORS.GRAY100};
    color: ${COLORS.GRAY30};
    transition: 0.1s;

    :hover {
      background-color: ${COLORS.GRAY80};
    }
  `,

  selectedCertiContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  `,

  certiLabel: css`
    display: flex;
    align-items: center;
    gap: 0 0.25rem;
    border-radius: 1rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2.25rem;
    padding: 0 0.5rem;
  `,

  smallDeleteButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,
};
