import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const disabledWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inputTextCSS = css`
  width: 100%;
  max-width: 13.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 1rem;
  color: ${COLORS.GRAY60};
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY80};
  background-color: ${COLORS.GRAY90};
`;

export const hide = css`
  margin: 0;
`;

export const labelCSS = css`
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const desc = css`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
`;

export const ageFormBox = css`
  font-size: 0.875rem;
  text-align: center;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  white-space: nowrap;
  border: 1px solid ${COLORS.GRAY70};
  background-color: ${COLORS.GRAY100};
  height: 3rem;
  color: ${COLORS.GRAY30};
  width: 18.75rem;
  transition: all 0.5s ease;
  -moz-appearance: textfield;

  :focus {
    border-color: ${COLORS.BLUE_FIRST40};
  }

  ::placeholder {
    text-align: center;
    font-size: 0.875rem;
    color: ${COLORS.GRAY60};
  }

  ::-webkit-inner-spin-button {
    appearance: none;
  }
  ::-webkit-outer-spin-button {
    appearance: none;
  }
`;
