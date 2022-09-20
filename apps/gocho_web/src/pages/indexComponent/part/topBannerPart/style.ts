import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const topBannerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a4a47;
  position: relative;
  height: 4.5rem;
`;

export const topBannerPosition = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const topBannerContainer = css`
  display: flex;
  align-items: center;
`;

export const bannerDesc = css`
  color: ${COLORS.GRAY100};
  font-weight: 400;
  font-size: 1.125rem;

  > span {
    color: ${COLORS.ERROR_YELLOW40};
  }
`;

export const linkButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  border: 1px solid ${COLORS.GRAY100};
  color: ${COLORS.GRAY100};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: all 0.2s ease;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.ERROR_YELLOW40};
      border-color: ${COLORS.ERROR_YELLOW40};
      color: ${COLORS.GRAY10};
    }
  }
`;

export const closeButton = css`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 1.5rem;
  color: ${COLORS.GRAY100};
`;
