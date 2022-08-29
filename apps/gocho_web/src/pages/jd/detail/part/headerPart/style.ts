import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const skeletonContainer = css`
  overflow: hidden;
  height: 13rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 0.5rem rgba(43, 43, 43, 0.1);
  position: relative;
`;

export const observeCSS = css`
  height: 1px;
`;

// position part
export const positionContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem 0 2.1875rem;
`;

export const positionTitle = css`
  width: 8.5rem;
  height: 2.25rem;
  background-color: ${COLORS.GRAY10};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  font-size: 0.75rem;
  color: ${COLORS.GRAY100};
  font-weight: 700;

  > span {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${COLORS.BLUE_SECOND70};
    color: ${COLORS.GRAY10};
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    right: -0.5rem;
  }
`;

export const positionTitleSkeleton = css`
  width: 8.5rem;
  overflow: hidden;
  height: 2.25rem;
  border-radius: 2rem;
  text-indent: -9999px;
  position: relative;
  font-size: 0.75rem;
`;

export const cardContainer = css`
  width: calc(100% - 12rem);
  position: relative;
`;

export const moreButton = css`
  width: 5rem;
  height: 1.5rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY70};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.75rem;
  color: ${COLORS.GRAY60};
  border-radius: 1rem;
  margin: 1rem auto;
  transition: all 0.2s ease;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.BLUE_FIRST40};
    }
  }
`;
