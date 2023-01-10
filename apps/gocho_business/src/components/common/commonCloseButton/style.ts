import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

const sizeController = (size: "S" | "M" | "L" | "XL") => {
  if (size === "S") {
    return css`
      font-size: 0.8rem;
      width: 1.5rem;
      height: 1.5rem;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    `;
  }
  if (size === "M") {
    return css`
      font-size: 0.8rem;
      width: 2rem;
      height: 2rem;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    `;
  }
  if (size === "L") {
    return css`
      font-size: 1.4rem;
      width: 2.5rem;
      height: 2.5rem;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    `;
  }
  return css`
    font-size: 1.4rem;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  `;
};

export const closeButtonWrapper = (size: "S" | "M" | "L" | "XL") => css`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.GRAY60};
  display: flex;
  justify-content: center;
  align-items: center;
  ${sizeController(size)}
`;
