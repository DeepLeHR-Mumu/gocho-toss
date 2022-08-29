import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const titleCSS = css`
  text-align: center;
  color: ${COLORS.GRAY10};
  font-size: 1.125rem;
  line-height: 2;
  font-weight: 600;
  padding: 0 2rem;
`;

export const button = css`
  border: 1px solid ${COLORS.GRAY70};
  color: ${COLORS.GRAY70};
  background-color: transparent;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 1.25rem;
  transition: all 0.2s ease;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.GRAY10};
      color: ${COLORS.GRAY100};
      border-color: ${COLORS.GRAY10};
    }
  }
`;
