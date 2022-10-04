import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background-color: ${COLORS.GRAY100};
  margin-bottom: 2rem;
`;

export const container = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const logoBox = css`
  width: 8.5rem;
  height: 8.5rem;
  position: relative;
  box-shadow: 0px 2px 8px rgba(160, 160, 160, 0.25);
  border-radius: 1.5rem;
  padding: 0.5rem;
  overflow: hidden;
`;

export const bookmarkButton = (isBookmarked: boolean) => {
  return css`
    background-color: ${isBookmarked ? "#E9EEF9" : COLORS.GRAY90};
    padding: 16px 24px;
    border-radius: 24px;
    width: 152px;
    display: flex;
    justify-content: center;
    margin-bottom: 0.875rem;
    > div {
      color: ${isBookmarked ? COLORS.BLUE_NEON40 : COLORS.GRAY60};
      font-size: 0.8rem;
      margin-right: 0.2rem;
    }
    > p {
      color: ${COLORS.GRAY30};
      font-weight: 400;
      font-size: 14px;
      > span {
        margin-left: 0.3rem;
        color: ${isBookmarked ? COLORS.BLUE_NEON40 : COLORS.GRAY60};
      }
    }
  `;
};

export const iconBox = css``;

export const bookmarkText = css``;

export const bookmarkCount = css``;

export const viewCountContainer = css`
  display: flex;
  justify-content: center;
`;

export const viewIconBox = css`
  color: ${COLORS.GRAY40};
  margin-right: 0.1rem;
`;

export const viewText = css`
  color: ${COLORS.GRAY40};
  font-weight: 400;
  font-size: 0.875rem;
`;

export const viewCount = css`
  margin-left: 0.3rem;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 400;
  font-size: 0.875rem;
`;

export const companyName = css`
  font-size: 1.375rem;
  color: ${COLORS.GRAY10};
  margin-bottom: 1.5rem;
`;

export const industryText = css`
  color: ${COLORS.GRAY40};
  font-weight: 400;
`;
