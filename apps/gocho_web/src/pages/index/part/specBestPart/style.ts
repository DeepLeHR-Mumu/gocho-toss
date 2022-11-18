import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { DESKTOP } from "shared-style/mediaQuery";

export const specBestWrapper = css`
  margin-top: 5.5rem;
  padding: 6rem 0 10rem 0;
  background-color: ${COLORS.GRAY90};
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  margin-bottom: 3.5rem;
`;

export const linkButton = css`
  color: ${COLORS.GRAY40};
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const bestUserWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${DESKTOP} {
    justify-content: space-evenly;
  }
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
