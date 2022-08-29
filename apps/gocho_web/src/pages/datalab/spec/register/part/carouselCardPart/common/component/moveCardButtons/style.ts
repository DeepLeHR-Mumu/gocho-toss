import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const wrapper = css`
  position: absolute;
  left: 0;
  bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonCSS = css`
  width: 100%;
  max-width: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  font-size: 0.875rem;
  box-sizing: border-box;
  border-radius: 2rem;
  font-weight: 500;
  margin: 0 2rem;
  height: 3rem;
  transition: all 0.2s ease;
`;

export const prevButton = css`
  ${buttonCSS};
  background-color: ${COLORS.GRAY100};
  border-color: ${COLORS.GRAY70};
  color: ${COLORS.GRAY70};

  ${PC_HOVER} {
    :hover {
      border-color: ${COLORS.BLUE_FIRST40};
      color: ${COLORS.BLUE_FIRST40};
    }
  }
`;

export const nextButton = css`
  ${buttonCSS};
  background-color: ${COLORS.BLUE_FIRST40};
  border-color: ${COLORS.BLUE_FIRST40};
  color: ${COLORS.GRAY100};
`;
