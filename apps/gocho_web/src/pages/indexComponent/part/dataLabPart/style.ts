import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const dataLabWrapper = css`
  margin-top: 5.3125rem;
`;

export const title = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const dataLabContainer = css`
  background-color: ${COLORS.BLUE_SECOND90};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const companyLogoBox = css`
  width: 100%;
  max-width: 6.25rem;
  height: 4rem;
  position: relative;
`;

export const linkButton = css`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-left: 0.5rem;
  }
`;

export const dataLabDesc = css`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.GRAY20};
  margin-left: 1rem;
`;

export const textPoint = css`
  color: ${COLORS.BLUE_NEON40};
`;
