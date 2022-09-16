import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const weekdayContainer = css`
  border-top: 1px solid #b7b7b7;
  background-color: rgba(150, 150, 150, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    width: 100%;
    text-align: center;
    color: #8c8c8c;
    font-size: 0.875rem;
    padding: 1rem 0;
  }
`;

interface weekdayCSSDef {
  (dayNumber: number): SerializedStyles;
}

export const weekdayCSS: weekdayCSSDef = (dayNumber) => {
  if (dayNumber === 0) {
    return css`
      color: ${COLORS.ERROR_RED40};
    `;
  }
  if (dayNumber === 6) {
    return css`
      color: ${COLORS.BLUE_NEON40};
    `;
  }
  return css`
    color: ${COLORS.GRAY40};
  `;
};

export const sunday = css``;

export const satday = css`
  color: ${COLORS.BLUE_NEON40};
`;

export const table = css`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > li {
    width: 14.285714%;
    min-height: 8rem;
    color: #8c8c8c;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 1rem 6px;
    text-align: right;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;

    :nth-of-type(7n) {
      border-right: 0;
    }
  }
`;

export const dayCSS = css`
  padding: 0.5rem 0;
`;

export const todayCSS = css`
  background-color: ${COLORS.GRAY10};
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  text-align: center;
  display: flex;
  align-items: center;
  height: 1.875rem;
  justify-content: center;
  border-radius: 1rem;
  position: relative;
  margin-bottom: 1rem;

  > span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${COLORS.BLUE_FIRST40};
    color: ${COLORS.GRAY100};
    font-size: 0.875rem;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 2.1875rem;
    height: 2.1875rem;
  }
`;

export const skeletonContainer = css`
  border-top: 1px solid ${COLORS.GRAY80};
  border-bottom: 1px solid ${COLORS.GRAY80};
  width: 100%;
  height: 16.5625rem;
`;
