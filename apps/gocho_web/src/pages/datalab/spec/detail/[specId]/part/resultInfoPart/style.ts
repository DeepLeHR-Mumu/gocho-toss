import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const notQualifiedBox = css`
  padding: 1rem 4rem;
  margin-bottom: 6.25rem;
  > div {
    text-align: center;
    background-color: ${COLORS.GRAY90};
    padding: 1.5rem 0;
    border-radius: 1.5rem;
  }
`;

export const notQualifiedText = css`
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  font-weight: 400;
  > span {
    color: ${COLORS.BLUE_FIRST40};
  }
`;

export const container = css`
  position: relative;
  padding: 1rem 4rem;
  > div {
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const scoreContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const specTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const overview = css`
  margin: 0.375rem 0;
  font-size: 0.875rem;
  > span {
    color: ${COLORS.GRAY10};
    :last-of-type {
      color: ${COLORS.GRAY60};
    }
  }
`;

export const chipContainer = css`
  margin-top: 1.0469rem;
  display: flex;
  flex-direction: row;
`;

export const chipBox = css`
  align-self: flex-start;
  border-right: 1px solid ${COLORS.GRAY80};
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-right: 3rem;
  justify-content: center;
  :last-of-type {
    padding-right: 0rem;
    padding-left: 3rem;
    border-right: none;
  }
`;

export const title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  > div {
    font-size: 1rem;
    margin-right: 0.5625rem;
    color: ${COLORS.BLUE_NEON40};
  }
  > h3 {
    font-size: 0.875rem;
    color: ${COLORS.GRAY60};
    font-weight: 500;
  }
`;

export const chipList = css`
  display: flex;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const noChipContainer = css`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const noChipBox = css`
  text-align: center;
  font-size: 0.875rem;
  color: ${COLORS.GRAY60};
  background-color: ${COLORS.GRAY90};
  padding: 0.75rem 1.5rem;
  border-radius: 1.5rem;
`;

export const feedbackContainer = css`
  margin-top: 1rem;
`;

export const feedbackBox = css`
  margin-top: 1rem;
  margin-bottom: 3rem;
  border: 1px solid ${COLORS.GRAY60};
  border-radius: 1.5rem;
  padding: 0.75rem 1.5rem;
  word-break: break-all;
  > p {
    color: ${COLORS.GRAY30};
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
