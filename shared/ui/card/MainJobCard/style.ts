import { css } from "@emotion/react";

import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cardWrapper = (isMobile: boolean) => {
  return css`
    position: relative;
    display: block;
    cursor: pointer;
    width: ${isMobile ? "100%" : "calc(33% - 0.5rem)"};
    border-radius: 1.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
    padding: 1rem;
    overflow: hidden;
  `;
};

export const bookmarkButton = (isBookmarked = false) => {
  return css`
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    margin: 0;
    background-color: ${COLORS.GRAY90};
    border-radius: 0 1.25rem 0 1.25rem;
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    font-size: 1rem;
    z-index: 15;
  `;
};

export const labelContainer = css`
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
  color: ${COLORS.GRAY40};
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const infoBox = css`
  width: calc(100% - 6rem);
`;

export const companyNameCSS = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  font-weight: 500;
  margin-bottom: 0.375rem;
  line-height: 1.8;
  ${shorten()}
`;

export const companyLogoBox = css`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
`;

export const titleCSS = css`
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  line-height: 1.6;
  ${shorten(2)};
  min-height: 3.25rem;
  word-break: keep-all;
`;

export const jobCardSkeleton = css`
  overflow: hidden;
  width: calc(33% - 0.5rem);
  border-radius: 2rem;
  min-height: 12.5rem;
`;

export const bottomInfo = css`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;

  > li {
    position: relative;
    background-color: ${COLORS.GRAY90};
    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    min-width: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${COLORS.GRAY40};
    ${shorten()};

    :last-of-type {
      margin-right: 0;
    }
  }
`;
