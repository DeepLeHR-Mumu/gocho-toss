import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const skeletonContainer = css`
  overflow: hidden;
  height: 13rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 0.5rem rgba(43, 43, 43, 0.1);
  position: relative;
`;

// position part
export const positionContainer = css`
  margin: 1rem 0;
`;

export const positionTitle = css`
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: ${COLORS.GRAY10};
  border-radius: 1.5rem 0 0 0;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY100};

  > span {
    border-radius: 1.5rem;
    background-color: ${COLORS.BLUE_SECOND70};
    color: ${COLORS.GRAY10};
    margin-left: 0.5rem;
    padding: 0.25rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
  width: 100%;
  background-color: ${COLORS.GRAY100};
  padding: 2rem 0;
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
 }
`;
