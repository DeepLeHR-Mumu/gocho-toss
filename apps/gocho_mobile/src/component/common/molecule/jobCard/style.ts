import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const jobCardSkeleton = css`
  overflow: hidden;
  width: calc(50% - 0.5rem);
  height: 22rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = (isExpired = false) => {
  return css`
    position: relative;
    width: calc(50% - 0.5rem);
    border-radius: 2rem;
    padding: 1rem;
    overflow: hidden;
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
    margin: 0;
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
  > img {
    object-fit: contain;
  }
`;

export const dateInfoContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const cutBox = css`
  font-size: 0.9rem;
  white-space: nowrap;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  border-radius: 1rem;
  margin-top: 0.5rem;
  width: fit-content;
  padding: 0 1rem;
  height: 1.625rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.BLUE_FIRST40};
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const companyName = css`
  font-size: 1rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  ${shorten()};
`;

export const title = css`
  font-size: 0.875rem;
  display: block;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  line-height: 1.6;
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
  position: relative;
  > img {
    object-fit: contain;
  }
`;

export const detailInfo = css`
  padding: 0.5rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
  ${shorten()}
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
