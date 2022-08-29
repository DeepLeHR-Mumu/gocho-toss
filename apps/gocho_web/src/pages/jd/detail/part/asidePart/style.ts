import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const wrapper = css`
  width: 100%;
  max-width: 17rem;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  border-radius: 2rem;
  box-shadow: 0px 0.25rem 0.75rem ${COLORS.GRAY80};
`;

export const wrapperSkeleton = css`
  width: 100%;
  max-width: 17rem;
  height: 30rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0.25rem 0.75rem ${COLORS.GRAY80};
`;

export const headerCSS = css`
  padding: 1.75rem 1rem 0 1rem;
  box-sizing: border-box;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const imageBox = css`
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
`;

export const companyName = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 500;
  padding-left: 1.5rem;
  line-height: 1.4;
`;

export const commentButtonContainer = css`
  border-bottom: 1px solid ${COLORS.GRAY80};
  padding-bottom: 1rem;

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

  ${PC_HOVER} {
    :hover {
      border-color: ${COLORS.GRAY30};
    }
  }

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
