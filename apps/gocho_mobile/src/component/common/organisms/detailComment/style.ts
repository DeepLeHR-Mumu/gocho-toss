import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const sectionWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  box-shadow: 0px 0.25rem 0.75rem ${COLORS.GRAY80};
  z-index: 100;
`;

export const wrapperSkeleton = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  box-shadow: 0px 0.25rem 0.75rem ${COLORS.GRAY80};
  z-index: 100;
`;

export const headerWrapper = css`
  padding: 0.75rem 1.5rem 0;
  height: 7rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const closeCommentButton = css`
  margin-right: 1rem;
  font-size: 1.25rem;
`;

export const imageBox = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
`;

export const companyName = css`
  color: ${COLORS.GRAY10};
  font-weight: 700;
  padding-left: 0.5rem;
  line-height: 1.4;
`;

export const commentButtonContainer = css`
  > ul {
    display: flex;
    align-items: center;

    > li {
      margin-right: 0.5rem;

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const commentButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 1rem;
  height: 2rem;
  white-space: nowrap;
  border: 1px solid ${COLORS.GRAY80};
  font-size: 0.75rem;
  border-radius: 1rem;
  color: ${COLORS.GRAY10};
  transition: border-color 0.2s ease;
  position: relative;

  > span {
    position: absolute;
    top: -0.625rem;
    right: -0.375rem;
    width: fit-content;
    background-color: ${COLORS.BLUE_SECOND70};
    border-radius: 1rem;
    min-width: 1.625rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: ${COLORS.GRAY10};
  }
`;
