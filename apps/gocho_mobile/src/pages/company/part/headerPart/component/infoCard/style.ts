import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const wrapper = css`
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  margin-bottom: 2rem;
  box-shadow: 0px 0px 0.5rem rgba(43, 43, 43, 0.1);
`;

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const logoBox = css`
  width: 6.5rem;
  height: 6.5rem;
  position: relative;
  box-shadow: 0px 2px 8px rgba(160, 160, 160, 0.25);
  border-radius: 1rem;
  overflow: hidden;
`;

export const buttonBox = css`
  width: calc(100% - 7.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const bookmarkButton = (isBookmarked: boolean) => {
  return css`
    background-color: ${isBookmarked ? "#E9EEF9" : COLORS.GRAY90};
    padding: 0 0.5rem;
    width: fit-content;
    height: 3rem;
    border-radius: 2rem;
    width: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${isBookmarked ? COLORS.BLUE_NEON40 : COLORS.GRAY30};
    > svg {
      color: ${isBookmarked ? COLORS.BLUE_NEON40 : COLORS.GRAY60};
    }
  `;
};

export const countCSS = css`
  padding-left: 0.5rem;
`;

export const viewCountContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};

  > svg {
    margin-right: 0.5rem;
  }
`;

export const viewCount = css`
  margin-left: 0.3rem;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 400;
`;

export const companyName = css`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  ${shorten(2)}
`;

export const industryText = css`
  color: ${COLORS.GRAY40};
  font-weight: 400;
  font-size: 1.125rem;
`;
