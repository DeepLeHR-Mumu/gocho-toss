import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  contractTypeWrapper: css`
    display: flex;
    gap: 0 4rem;
  `,

  container: css`
    margin-top: 2rem;
    p {
      line-height: 2;
    }
  `,

  input: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.GRAY10};
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

  labelContainer: css`
    display: flex;
    gap: 0 2.5rem;
  `,

  radioLabel: css`
    margin-left: 0.25rem;
  `,

  conversionRateContainer: css`
    display: flex;
    align-items: flex-start;
  `,

  conversionRateSliderBox: css`
    margin-top: 1rem;
  `,

  rangeSlider: (isDisabled: boolean) => css`
    width: 8rem;
    height: 2px;
    margin-right: 2rem;
    background-color: ${isDisabled ? `${COLORS.GRAY70}` : `${COLORS.GRAY40}`};

    ::-webkit-slider-thumb {
      background-color: ${isDisabled ? `${COLORS.GRAY70}` : `${COLORS.GRAY40}`};
    }
  `,

  conversionRateLabel: (value: number) => css`
    line-height: 1;
    margin-left: ${value < 100 ? (6.5 * value) / 100 : 0}rem;
  `,

  conversionRateInputContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
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

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `,

  desc: css`
    color: ${COLORS.GRAY35};
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

  inputLabel: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${width}rem;
    height: 2.5rem;
    border: 1px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    padding: 0 0.5rem 0 1rem;
  `,

  inputContainer: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2rem;
  `,

  inputWithButton: css`
    font-size: 1rem;
    width: calc(100% - 3rem);
    font-weight: 400;
    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
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
