import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const jobCardSkeleton = css`
  overflow: hidden;
  max-width: 11rem;
  width: 48.5%;
  height: 22rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = (isExpired = false) => {
  return css`
    position: relative;
    max-width: 11rem;
    width: 48.5%;
    height: 22rem;
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
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  font-weight: 700;
  border-radius: 1rem;
  margin-left: 0.25rem;
  padding: 0.3rem 0.5rem;
  background-color: #f6f6f6;
  color: #1553cd;
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

export const detailInfo = css`
  padding: 0.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
`;

export const taskTitle = css`
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem;
`;

export const taskSummary = css`
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.25rem;
  color: ${COLORS.GRAY30};
`;

export const taskNumber = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_SECOND70};
  border-radius: 1.5rem;
  padding: 0.25rem 0.5rem;
`;

export const taskBox = css`
  width: fit-content;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  padding: 0.375rem;
  margin-right: 0.5rem;
  color: ${COLORS.GRAY40};
  border: 1px solid ${COLORS.GRAY80};
`;

export const taskContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;
