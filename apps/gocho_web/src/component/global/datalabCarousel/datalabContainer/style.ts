import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const dataLabContainer = css`
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const dataLabLayout = css`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin: auto;
  transition: padding 0.2s ease;
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
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-left: 0.5rem;
  }
`;

export const dataLabDesc = css`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 1.75rem 0;
  color: ${COLORS.GRAY20};
  margin-left: 1rem;
`;

export const textPoint = css`
  color: ${COLORS.BLUE_NEON30};
`;
