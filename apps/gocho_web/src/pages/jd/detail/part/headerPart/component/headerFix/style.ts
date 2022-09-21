import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";
import { PC_HOVER } from "shared-style/mediaQuery";

export const headerCSS = css`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: ${COLORS.GRAY100};
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.1);
`;

export const flexBetweenBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const goBackButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
  color: ${COLORS.GRAY40};
  margin-right: 1.25rem;
`;

export const titleBox = css``;

export const companyNameCSS = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  line-height: 1.8;
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  ${shorten()}
`;

export const bookmarkButton = (isBookmarked = false) => {
  return css`
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    border-radius: 2rem;
    padding: 0.625rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;

    ${PC_HOVER} {
      :hover {
        background-color: ${COLORS.GRAY80};
      }
    }

    > span {
      color: ${COLORS.GRAY60};
    }
  `;
};

export const applyBox = css`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

export const dDayContainer = css`
  z-index: 10;
  position: relative;
`;

export const applyButton = css`
  background-color: ${COLORS.BLUE_FIRST40};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: -0.5rem;
  z-index: 0;
`;
