import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const jobCardSkeleton = css`
  display: flex;
  width: calc(50% - 0.5rem);
  height: 10rem;
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.GRAY90};
  box-shadow: 0px 0px 0.5rem 0px #2b2b2b1a;
  overflow: hidden;
`;

export const cardWrapper = css`
  width: calc(50% - 0.5rem);
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY90};
  position: relative;
  padding: 1rem;
  box-shadow: 0px 0px 0.5rem 0px #2b2b2b1a;
  overflow: hidden;
`;

export const linkButtonCSS = (isMobile: boolean) => {
  return css`
    display: flex;
    align-items: flex-start;
    flex-direction: ${isMobile ? "column" : "row"};
  `;
};

export const bookmarkButton = (isBookmarked: boolean) => {
  return css`
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    position: absolute;
    right: 0;
    z-index: 10;
    top: 0;
    margin: 0;
    border-radius: 0 0 0 1rem;
    padding: 1rem;
    font-size: 0.875rem;
  `;
};

export const companyLogoBox = css`
  min-width: 5.5rem;
  height: 5.5rem;
  position: relative;
`;

export const jobInfoBox = (isMobile: boolean) => {
  return css`
    margin-left: ${!isMobile && "1rem"};
  `;
};

export const flexBox = css`
  display: flex;
`;

export const cutBox = css`
  font-size: 0.75rem;
  white-space: nowrap;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  margin-left: 0.375rem;
  border-radius: 1rem;
  width: fit-content;
  height: 1.625rem;
  background-color: #f2f2f2;
  color: #1553cd;
`;

export const companyName = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  line-height: 2;
  ${shorten(2)}
`;

export const title = css`
  height: 3.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  ${shorten(2)}
`;
