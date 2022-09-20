import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const companyCardSkeleton = css`
  overflow: hidden;
  width: 32%;
  height: 11.5rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY100};
`;

export const cardWrapper = css`
  width: 32%;
  margin-bottom: 1.5%;
  margin-right: 1.8%;
  border-radius: 1.5rem;
  border: 2px solid ${COLORS.GRAY90};
  padding: 1.75rem;
  position: relative;
  background-color: ${COLORS.GRAY100};

  :nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const bookmarkButtonWrapper = (isBookmarked = false) => {
  return css`
    display: flex;
    align-items: center;
    background-color: ${isBookmarked ? COLORS.STATE_SUCCESS : `${COLORS.GRAY90}`};
    color: ${isBookmarked ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    border-radius: 0 1rem 0 1rem;
    padding: 1rem;
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
};

export const isRecruitingCSS = css`
  color: ${COLORS.ERROR_RED40};
`;

export const NameCSS = css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLORS.GRAY30};
  margin-top: 0.5rem;
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
