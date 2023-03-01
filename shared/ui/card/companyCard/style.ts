import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";
import { shorten } from "shared-style/common";

export const companyCardSkeleton = css`
  overflow: hidden;
  min-width: 18rem;
  width: calc(33% - 0.5rem);
  height: 12.5rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = css`
  min-width: 18rem;
  width: calc(33% - 0.5rem);
  /* height: 12.5rem; */
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid ${COLORS.GRAY90};
  padding: 1.25rem;
  position: relative;
  background-color: ${COLORS.GRAY100};

  :nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const bookmarkButtonWrapper = (isBookmarked = false) => css`
  display: flex;
  align-items: center;
  background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
  color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
  border-radius: 0 1rem 0 1rem;
  padding: 1rem;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.GRAY80};
      color: ${COLORS.GRAY40};
    }
  }
`;

export const isRecruitingCSS = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const nameCSS = css`
  font-size: 1rem;
  display: block;
  margin: 0.5rem 0;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  ${shorten(2)};
`;

export const infoWrapper = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const companyLogoBox = css`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin: 0 0 0 auto;
  > img {
    object-fit: contain;
  }
`;

export const sizeCSS = css`
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 0.25rem;
  color: ${COLORS.GRAY40};
`;

export const sectorCSS = css`
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  line-height: 1.125;
  color: ${COLORS.GRAY40};
`;
