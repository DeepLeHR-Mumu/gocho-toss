import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

interface numberInputLabelCSSDef {
  (isFocus: boolean): SerializedStyles;
}

export const numberInputLabelCSS: numberInputLabelCSSDef = (isFocus) => {
  return css`
    border: 1px solid ${isFocus ? COLORS.BLUE_NEON50 : COLORS.GRAY10};
    padding: 0 2rem;
    box-sizing: border-box;
    background-color: ${isFocus ? COLORS.GRAY100 : COLORS.GRAY90};
    border-radius: 2rem;
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  `;
};

interface labelFirstDescDef {
  (isFocus: boolean): SerializedStyles;
}

export const labelFirstDesc: labelFirstDescDef = (isFocus) => {
  return css`
    font-size: 0.875rem;
    color: ${isFocus ? COLORS.GRAY30 : COLORS.GRAY10};
    margin-right: 5px;
    transition: all 0.2s ease;
  `;
};

interface numberInputCSSDef {
  (isFocus: boolean): SerializedStyles;
}

export const numberInputCSS: numberInputCSSDef = (isFocus) => {
  return css`
    width: 3.125rem;
    font-size: 0.875rem;
    color: ${isFocus ? COLORS.GRAY10 : COLORS.BLUE_FIRST40};
    text-align: center;
    transition: all 0.2s ease;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      appearance: none;
    }
    ::placeholder {
      color: ${COLORS.GRAY10};
      text-decoration: underline;
    }
    :focus {
      outline: 0;
    }
  `;
};

interface labelLastDescDef {
  (isFocus: boolean): SerializedStyles;
}

export const labelLastDesc: labelLastDescDef = (isFocus) => {
  return css`
    font-size: 0.875rem;
    color: ${isFocus ? COLORS.GRAY30 : COLORS.GRAY10};
    transition: all 0.2s ease;
  `;
};
