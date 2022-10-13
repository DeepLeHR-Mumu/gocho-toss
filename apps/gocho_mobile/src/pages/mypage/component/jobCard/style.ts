import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const jobCardSkeleton = css`
  overflow: hidden;
  width: 100%;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = (isExpired = false) => {
  return css`
    position: relative;
    width: 100%;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: ${isExpired ? COLORS.GRAY95 : `${COLORS.GRAY100}`};
    box-shadow: 0 0 8px rgba(43, 43, 43, 0.1);
    transition: all 0.3s ease;
  `;
};

export const bookmarkButtonWrapper = (isBookmarked = false) => {
  return css`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    border-radius: 0 1rem 0 1rem;
    padding: 0.875rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.3s ease;
    z-index: 10;
  `;
};

export const companyLogoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`;

export const companyLogoBox = css`
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
`;

export const dateInfoContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
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
  z-index: 20;
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.125rem;
`;

export const companyName = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  ${shorten()};
`;

export const title = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  height: 4rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  ${shorten(3)};
`;

export const detailInfoContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  gap: 0.25rem 0.5rem;
`;

export const eduQual = css`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 50%;
`;
