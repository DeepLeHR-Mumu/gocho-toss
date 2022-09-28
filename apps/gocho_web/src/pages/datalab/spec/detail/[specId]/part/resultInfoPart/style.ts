import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const notQualifiedBox = css`
  margin: 2rem;
`;

export const linkBoxCSS = css`
  width: 16rem;
  margin: auto;
`;

export const notQualifiedText = css`
  width: 100%;
  height: 4.625rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  font-weight: 400;

  > span {
    color: ${COLORS.BLUE_FIRST40};
  }
`;

export const container = css`
  position: relative;
  padding: 1rem 2rem;

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
  margin-bottom: 2rem;
`;

export const specTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 3;

  > svg {
    color: ${COLORS.BLUE_FIRST40};
    font-size: 1.25rem;
  }
`;

export const overview = css`
  font-size: 0.875rem;
  line-height: 3;
  font-weight: 500;
  color: ${COLORS.GRAY10};

  > span {
    color: ${COLORS.GRAY60};
  }
`;

export const chipContainer = css`
  margin-top: 1.0469rem;
  display: flex;
  flex-direction: row;
`;

export const chipBox = css`
  border-right: 1px solid ${COLORS.GRAY80};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;

  :last-of-type {
    padding-left: 2.5rem;
    border-right: none;
  }
`;

export const title = css`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.GRAY60};
  font-weight: 500;
  margin-bottom: 1rem;

  > svg {
    color: ${COLORS.BLUE_FIRST40};
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

export const chipList = css`
  display: flex;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const noChipContainer = css`
  margin: 2.5rem auto;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY90};
  height: 3rem;
  border-radius: 2rem;
  padding: 0 2rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
  white-space: nowrap;
`;

export const noChipBox = css`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const feedbackContainer = css`
  margin-top: 1rem;
`;

export const feedbackBox = css`
  margin-bottom: 2.5rem;
  border: 1px solid ${COLORS.GRAY60};
  border-radius: 2rem;
  padding: 0.75rem 1.5rem;

  > li {
    color: ${COLORS.GRAY30};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 2;
  }
`;
