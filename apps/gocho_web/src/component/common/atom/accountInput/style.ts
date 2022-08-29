import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "@style/constant";

import { ColorStateDef } from "./type";

export const container = css`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

interface inputCSSDef {
  (colorState: ColorStateDef): SerializedStyles;
}
export const inputCSS: inputCSSDef = (colorState) => {
  let colorStatus = css`
    border: 1px solid ${COLORS.GRAY60};
  `;
  if (colorState === "error")
    colorStatus = css`
      border: 1px solid ${COLORS.ERROR_RED30};
    `;
  if (colorState === "focus" || colorState === "success")
    colorStatus = css`
      border: 1px solid ${COLORS.BLUE_FIRST40};
    `;
  return css`
    ${colorStatus}
    width:18rem;
    padding: 1rem 2.6rem 1rem 1.75rem;
    border-radius: 1.5rem;
    color: ${COLORS.GRAY60};
    font-size: 1rem;
  `;
};

interface labelCSSDef {
  (colorState: ColorStateDef): SerializedStyles;
}
export const labelCSS: labelCSSDef = (colorState) => {
  let colorStatus = css`
    color: ${COLORS.GRAY60};
  `;
  if (colorState === "error")
    colorStatus = css`
      color: ${COLORS.ERROR_RED30};
    `;
  if (colorState === "focus" || colorState === "success")
    colorStatus = css`
      color: ${COLORS.BLUE_FIRST40};
    `;
  return css`
    ${colorStatus}
    font-size: 0.75rem;
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 1.75rem;
    transform: translate(0%, -50%);
    background-color: ${COLORS.GRAY100};
    padding: 0 0.25rem;
    height: 1rem;
    text-align: center;
  `;
};

interface buttonCSSDef {
  (colorState: ColorStateDef): SerializedStyles;
}
export const buttonCSS: buttonCSSDef = (colorState) => {
  let colorStatus = css`
    color: ${COLORS.GRAY60};
  `;
  if (colorState === "error")
    colorStatus = css`
      color: ${COLORS.ERROR_RED30};
    `;
  if (colorState === "focus" || colorState === "success")
    colorStatus = css`
      color: ${COLORS.BLUE_FIRST40};
    `;
  return css`
    ${colorStatus}
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 1.2rem;
  `;
};

export const errorMessageBox = css`
  height: 0.75rem;
  margin-top: 0.2rem;
`;

export const errorMessage = css`
  color: ${COLORS.ERROR_RED30};
  margin-left: 1.75rem;
  font-size: 0.75rem;
`;
