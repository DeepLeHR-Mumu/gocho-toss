import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const listContainer = css`
  margin-top: 3rem;
`;

export const sliderButtonContainer = css`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const sliderButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 1.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  color: ${COLORS.GRAY40};
  background-color: ${COLORS.GRAY90};
  opacity: 0.7;

  transition: all 0.2s ease-in;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.GRAY10};
      border: 0;
    }
  }
`;
